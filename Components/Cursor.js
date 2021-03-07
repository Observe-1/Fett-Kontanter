import React from "react";
import { View, StyleSheet } from "react-native";
import { PanGestureHandler } from "react-native-gesture-handler";
import Animated, {
  useAnimatedGestureHandler,
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";
import { getYForX, Vector } from "react-native-redash";

import { GraphIndex, graphs } from "./Model";

const CURSOR = 50;
const styles = StyleSheet.create({
  cursor: {
    width: CURSOR,
    height: CURSOR,
    borderRadius: CURSOR / 2,
    backgroundColor: "rgba(0, 0, 0, 0.1)",
    justifyContent: "center",
    alignItems: "center",
  },
  cursorBody: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: "black",
  },
});


const Cursor = ({ index, translation }) => {

  const cuberoot = (x) => {
    "worklet";
    const y = Math.pow(Math.abs(x), 1 / 3);
    return x < 0 ? -y : y;
  };

  const solveCubic = (a, b, c, d) => {
    "worklet";
    if (Math.abs(a) < 1e-8) {
      // Quadratic case, ax^2+bx+c=0
      a = b;
      b = c;
      c = d;
      if (Math.abs(a) < 1e-8) {
        // Linear case, ax+b=0
        a = b;
        b = c;
        if (Math.abs(a) < 1e-8) {
          // Degenerate case
          return [];
        }
        return [-b / a];
      }
  
      const D = b * b - 4 * a * c;
      if (Math.abs(D) < 1e-8) {
        return [-b / (2 * a)];
      } else if (D > 0) {
        return [(-b + Math.sqrt(D)) / (2 * a), (-b - Math.sqrt(D)) / (2 * a)];
      }
      return [];
    }
  
    // Convert to depressed cubic t^3+pt+q = 0 (subst x = t - b/3a)
    const p = (3 * a * c - b * b) / (3 * a * a);
    const q = (2 * b * b * b - 9 * a * b * c + 27 * a * a * d) / (27 * a * a * a);
    let roots;
  
    if (Math.abs(p) < 1e-8) {
      // p = 0 -> t^3 = -q -> t = -q^1/3
      roots = [cuberoot(-q)];
    } else if (Math.abs(q) < 1e-8) {
      // q = 0 -> t^3 + pt = 0 -> t(t^2+p)=0
      roots = [0].concat(p < 0 ? [Math.sqrt(-p), -Math.sqrt(-p)] : []);
    } else {
      const D = (q * q) / 4 + (p * p * p) / 27;
      if (Math.abs(D) < 1e-8) {
        // D = 0 -> two roots
        roots = [(-1.5 * q) / p, (3 * q) / p];
      } else if (D > 0) {
        // Only one real root
        const u = cuberoot(-q / 2 - Math.sqrt(D));
        roots = [u - p / (3 * u)];
      } else {
        // D < 0, three roots, but needs to use complex numbers/trigonometric solution
        const u = 2 * Math.sqrt(-p / 3);
        const t = Math.acos((3 * q) / p / u) / 3; // D < 0 implies p < 0 and acos argument in [-1..1]
        const k = (2 * Math.PI) / 3;
        roots = [u * Math.cos(t), u * Math.cos(t - k), u * Math.cos(t - 2 * k)];
      }
    }
  
    // Convert back from depressed cubic
    for (let i = 0; i < roots.length; i++) {
      roots[i] -= b / (3 * a);
    }
  
    return roots;
  };

  const cubicBezier = (
    t,
    from,
    c1,
    c2,
    to
  ) => {
    "worklet";
    const term = 1 - t;
    const a = 1 * term ** 3 * t ** 0 * from;
    const b = 3 * term ** 2 * t ** 1 * c1;
    const c = 3 * term ** 1 * t ** 2 * c2;
    const d = 1 * term ** 0 * t ** 3 * to;
    return a + b + c + d;
  };

  const round = (value, precision = 0) => {
    "worklet";
    const p = Math.pow(10, precision);
    return Math.round(value * p) / p;
  };

  const cubicBezierYForX = (
    x,
    a,
    b,
    c,
    d,
    precision = 2
  ) => {
    "worklet";
    const pa = -a.x + 3 * b.x - 3 * c.x + d.x;
    const pb = 3 * a.x - 6 * b.x + 3 * c.x;
    const pc = -3 * a.x + 3 * b.x;
    const pd = a.x - x;
    const t = solveCubic(pa, pb, pc, pd)
      .map((root) => round(root, precision))
      .filter((root) => root >= 0 && root <= 1)[0];
    return cubicBezier(t, a.y, b.y, c.y, d.y);
  };

  const curveIsFound = (c) => {
    "worklet";
    return c.curve !== null;
  };

  const selectCurve = (path, x) => {
    "worklet";
    const result = {
      from: path.move,
      curve: null,
    };
    for (let i = 0; i < path.curves.length; i++) {
      const c = path.curves[i];
      const contains =
        result.from.x > c.to.x
          ? x >= c.to.x && x <= result.from.x
          : x >= result.from.x && x <= c.to.x;
      if (contains) {
        result.curve = c;
        break;
      }
      result.from = c.to;
    }
    if (!curveIsFound(result)) {
      throw new Error(`No curve found at ${x}`);
    }
    return result;
  };

  const getYForX = (path, x, precision = 2) => {
    "worklet";
    const c = selectCurve(path, x);
    return cubicBezierYForX(
      x,
      c.from,
      c.curve.c1,
      c.curve.c2,
      c.curve.to,
      precision
    );
  };

  const isActive = useSharedValue(false);
  const onGestureEvent = useAnimatedGestureHandler({
    onStart: () => {
      isActive.value = true;
    },
    onActive: (event) => {
      translation.x.value = event.x;
      translation.y.value = getYForX(
        graphs[index.value].data.path,
        translation.x.value
      );
    },
    onEnd: () => {
      isActive.value = false;
    },
  });

  const style = useAnimatedStyle(() => {
    const translateX = translation.x.value - CURSOR / 2;
    const translateY = translation.y.value - CURSOR / 2;
    return {
      transform: [
        { translateX },
        { translateY },
        { scale: withSpring(isActive.value ? 1 : 0) },
      ],
    };
  });

  return (
    <View style={StyleSheet.absoluteFill}>
      <PanGestureHandler {...{ onGestureEvent }}>
        <Animated.View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.cursor, style]}>
            <View style={styles.cursorBody} />
          </Animated.View>
        </Animated.View>
      </PanGestureHandler>
    </View>
  );
};

export default Cursor;