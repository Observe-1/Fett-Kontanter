import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import { Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { AreaChart, PieChart, LineChart } from "react-native-svg-charts";

export default function PortfolioScreen() {
    const data = Array.apply(null, Array(50)).map(Number.prototype.valueOf, 1);

    // Change to whatever your fill function looks like...
    const getFill = (index) => {
        if (index > 30) return "purple";
        if (index > 20) return "blue";
        if (index > 10) return "green";
        return "red";
    };

    const pieData = data.map((value, index) => ({
        value,
        svg: {
            fill: getFill(index),
        },
        key: `pie-${index}`,
    }));

    const data2 = [
        50,
        10,
        40,
        95,
        -4,
        -24,
        85,
        91,
        -35,
        55,
        -53,
        24,
        50,
        -20,
        -80,
    ];

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Portfolio!</Text>
            <Button raised accent text="Button to nowhere lol" />

            <PieChart
                style={{ width: 100, height: 100 }}
                data={pieData}
                animate={true}
            />
            <AreaChart
                style={{ width: 100, height: 200 }}
                data={data2}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                animate={true}
                svg={{ fill: "rgba(134, 65, 244, 0.8)" }}
            >
                <Grid />
            </AreaChart>
            <LineChart
                style={{ width: 200, height: 200 }}
                animate={true}
                data={data2}
                svg={{ stroke: "rgb(134, 65, 244)" }}
                contentInset={{ top: 20, bottom: 20 }}
            >
                <Grid />
            </LineChart>
        </View>
    );
}
