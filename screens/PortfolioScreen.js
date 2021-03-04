import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import { Grid } from "react-native-svg-charts";
import * as shape from "d3-shape";
import { AreaChart, PieChart, LineChart } from "react-native-svg-charts";

export default function PortfolioScreen() {
    const data = [
        {
            key: 1,
            value: 50,
            svg: { fill: "#600080" },
            arc: { outerRadius: "130%", cornerRadius: 10 },
        },
        {
            key: 2,
            value: 50,
            svg: { fill: "#9900cc" },
        },
        {
            key: 3,
            value: 40,
            svg: { fill: "#c61aff" },
        },
        {
            key: 4,
            value: 95,
            svg: { fill: "#d966ff" },
        },
        {
            key: 5,
            value: 35,
            svg: { fill: "#ecb3ff" },
        },
    ];

    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <Text
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={"white"}
                    textAnchor={"middle"}
                    alignmentBaseline={"middle"}
                    fontSize={24}
                    stroke={"black"}
                    strokeWidth={0.2}
                    style={{
                        // position: "absolute",
                        textAlign: "center",
                    }}
                >
                    {pieCentroid[0]}
                </Text>
            );
        });
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <PieChart
                style={{ width: 200, height: 200 }}
                valueAccessor={({ item }) => item.value}
                outerRadius={"70%"}
                innerRadius={10}
                data={data}
                spacing={0}
            >
                <Labels />
            </PieChart>
        </View>
    );
}
