import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

export default function FettKontanterView(props) {
    return (
        <LinearGradient
            colors={["#2F3A4A", "rgba(80,92,112,1)", "rgba(255,204,82,1)"]}
            locations={[0, 0.5, 1]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={[props.styles.centerView, { flex: 1 }]}
        >
            {props.children}
        </LinearGradient>
    );
}
