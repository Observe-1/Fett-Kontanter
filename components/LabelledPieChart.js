import * as React from "react";
import { View } from "react-native";
import { Button } from "react-native-material-ui";
import { Text } from "react-native-svg";
import * as shape from "d3-shape";
import { Grid, AreaChart, PieChart, LineChart } from "react-native-svg-charts";

export default function LabelledPieChart(props) {
    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
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
                    {data.pounds}
                </Text>
            );
        });
    };

    return (
        <PieChart
            style={{ width: 200, height: 200 }}
            valueAccessor={({ item }) => item.value}
            outerRadius={"70%"}
            innerRadius={10}
            data={props.pieData}
            spacing={0}
        >
            <Labels />
        </PieChart>
    );
}
