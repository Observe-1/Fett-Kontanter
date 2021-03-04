import * as React from "react";
import { View } from "react-native";
import { Button } from "react-native-material-ui";
import { Text } from "react-native-svg";
import * as shape from "d3-shape";
import { Grid, AreaChart, PieChart, LineChart } from "react-native-svg-charts";
import { Card } from "react-native-paper";

import LabelledPieChart from "../components/LabelledPieChart";

export default function PortfolioScreen() {
    const data = [
        {
            key: 1,
            value: 50,
            pounds: "£50k",
            svg: { fill: "#FF6500" },
            arc: { outerRadius: "130%", cornerRadius: 10 },
        },
        {
            key: 2,
            value: 50,
            pounds: "£50k",
            svg: { fill: "#d02860" },
        },
        {
            key: 3,
            value: 40,
            pounds: "£40k",
            svg: { fill: "#d02800" },
        },
        {
            key: 4,
            value: 95,
            pounds: "£95k",
            svg: { fill: "#d00060" },
        },
        {
            key: 5,
            value: 35,
            pounds: "£35k",
            svg: { fill: "#FF0000" },
        },
    ];

    //TODO Make default theme
    const theme = {
        roundness: 30,
    };

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Card
                theme={theme}
                elevation={5}
                style={{ height: 200, width: 200 }}
            >
                <Card.Content
                    style={{
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <LabelledPieChart pieData={data} />
                </Card.Content>
            </Card>
        </View>
    );
}
