import React from "react";
import { PieChart } from "react-native-svg-charts";
import { View } from "react-native";
import { Circle, G, Line, Text } from "react-native-svg";

function PieChartWithLabelExample() {
    const data = [50, 40, 95, -4, -24, 85, 91];

    const randomColor = () =>
        ("#" + ((Math.random() * 0xffffff) << 0).toString(16) + "000000").slice(
            0,
            7,
        );

    const pieData = data
        .filter((value) => value > 0)
        .map((value, index) => ({
            value,
            svg: { fill: randomColor() },
            key: `pie-${index}`,
        }));

    const Labels = ({ slices }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <G key={index}>
                    <Text
                        key={index}
                        x={pieCentroid[0]}
                        y={pieCentroid[1]}
                        fill={"black"}
                        textAnchor={"middle"}
                        alignmentBaseline={"middle"}
                        stroke={"black"}
                        strokeWidth={0.2}
                    >
                        {data.value}
                    </Text>
                </G>
            );
        });
    };

    return (
        <PieChart
            style={{ height: 200 }}
            data={pieData}
            innerRadius={20}
            outerRadius={55}
            labelRadius={80}
        >
            <Labels />
        </PieChart>
    );
}

export default PieChartWithLabelExample;
