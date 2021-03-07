import React from "react";
import { Text, View, StyleSheet, Dimensions } from "react-native";
import Svg, { Path } from "react-native-svg";
import Animated, {
  useAnimatedProps,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
  runOnJS,
  interpolate,
} from "react-native-reanimated";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";
import { useVector } from "react-native-redash";

import { GraphIndex, graphs, SIZE } from "../Components/Model";
import Cursor from "../Components/Cursor";

const { width } = Dimensions.get("window");
const AnimatedPath = Animated.createAnimatedComponent(Path);

const SELECTION_WIDTH = width - 32;
const BUTTON_WIDTH = (width - 32) / graphs.length;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  backgroundSelection: {
    backgroundColor: "#f3f3f3",
    ...StyleSheet.absoluteFillObject,
    width: BUTTON_WIDTH,
    borderRadius: 8,
  },
  selection: {
    flexDirection: "row",
    width: SELECTION_WIDTH,
    alignSelf: "center",
  },
  labelContainer: {
    padding: 16,
    width: BUTTON_WIDTH,
  },
  label: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
    textAlign: "center",
  },
});

const Graph = () => {
  const translation = useVector();
  const transition = useSharedValue(0);
  const previous = useSharedValue(0);
  const current = useSharedValue(0);

  const mixPath = (
    value,
    p1,
    p2,
    extrapolate = Animated.Extrapolate.CLAMP
  ) => {
    "worklet";
    return interpolatePath(value, [0, 1], [p1, p2], extrapolate);
  };

  const serialize = (path) => {
    "worklet";
    return `M${path.move.x},${path.move.y} ${path.curves
      .map((c) => `C${c.c1.x},${c.c1.y} ${c.c2.x},${c.c2.y} ${c.to.x},${c.to.y}`)
      .join(" ")}${path.close ? "Z" : ""}`;
  };
  
  const interpolatePath = (
    value,
    inputRange,
    outputRange,
    extrapolate = Animated.Extrapolate.CLAMP
  ) => {
    "worklet";
    const path = {
      move: {
        x: interpolate(
          value,
          inputRange,
          outputRange.map((p) => p.move.x),
          extrapolate
        ),
        y: interpolate(
          value,
          inputRange,
          outputRange.map((p) => p.move.y),
          extrapolate
        ),
      },
      curves: outputRange[0].curves.map((_, index) => ({
        c1: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].c1.x),
            extrapolate
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].c1.y),
            extrapolate
          ),
        },
        c2: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].c2.x),
            extrapolate
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].c2.y),
            extrapolate
          ),
        },
        to: {
          x: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].to.x),
            extrapolate
          ),
          y: interpolate(
            value,
            inputRange,
            outputRange.map((p) => p.curves[index].to.y),
            extrapolate
          ),
        },
      })),
      close: outputRange[0].close,
    };
    return serialize(path);
  };
  
  const animatedProps = useAnimatedProps(() => {
    const previousPath = graphs[previous.value].data.path;
    const currentPath = graphs[current.value].data.path;
    return {
      d: mixPath(transition.value, previousPath, currentPath),
    };
  });

  const style = useAnimatedStyle(() => ({
    transform: [{ translateX: withTiming(BUTTON_WIDTH * current.value) }],
  }));
  
  return (
    <View style={styles.container}>
      <View>
        <Svg width={SIZE} height={SIZE}>
          <AnimatedPath
            animatedProps={animatedProps}
            fill="transparent"
            stroke="black"
            strokeWidth={3}
          />
        </Svg>
        <Cursor translation={translation} index={current} />
      </View>
      <View style={styles.selection}>
        <View style={StyleSheet.absoluteFill}>
          <Animated.View style={[styles.backgroundSelection, style]} />
        </View>
        {graphs.map((graph, index) => {
          return (
            <TouchableWithoutFeedback
              key={graph.label}
              onPress={() => {
                previous.value = current.value;
                transition.value = 0;
                current.value = index;
                transition.value = withTiming(1);
              }}
            >
              <Animated.View style={[styles.labelContainer]}>
                <Text style={styles.label}>{graph.label}</Text>
              </Animated.View>
            </TouchableWithoutFeedback>
          );
        })}
      </View>
    </View>
  );
};

export default Graph;