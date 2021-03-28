import * as React from "react";
import { View } from "react-native";
import { Button } from "react-native-material-ui";
// import { Text } from "react-native-svg";
import * as shape from "d3-shape";
import { Grid, AreaChart, PieChart, LineChart } from "react-native-svg-charts";
import { Card } from "react-native-paper";
import { Text, FlatList } from "react-native";

// import LabelledPieChart from "../components/LabelledPieChart";

export default async function PortfolioScreen() {
    saveKeyValue(
        "pieChartTestData",
        JSON.stringify([
            {
                key: 1,
                value: [
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
                ],
            },
            {
                key: 2,
                value: [
                    {
                        key: 1,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 2,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                    {
                        key: 3,
                        value: 100,
                        pounds: "£100k",
                        svg: { fill: "#d02800" },
                    },
                    {
                        key: 4,
                        value: 35,
                        pounds: "£35k",
                        svg: { fill: "#FF0000" },
                    },
                ],
            },
            {
                key: 3,
                value: [
                    {
                        key: 1,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 2,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                ],
            },
            {
                key: 4,
                value: [
                    {
                        key: 1,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 2,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                    {
                        key: 3,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 4,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                    {
                        key: 5,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 6,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                    {
                        key: 7,
                        value: 80,
                        pounds: "£80k",
                        svg: { fill: "#d02860" },
                    },
                    {
                        key: 8,
                        value: 50,
                        pounds: "£50k",
                        svg: { fill: "#FF6500" },
                    },
                ],
            },
        ]),
    );

    let localPieChartTestData = await getKeyValue("pieChartTestData").then(
        (stringJsonValue) => {
            return JSON.parse(stringJsonValue);
        },
    );

    console.log(localPieChartTestData);

    //TODO Make default theme
    const theme = {
        roundness: 30,
    };

    return (
        <View
            style={{
                flex: 1,
                justifyContent: "space-between",
                alignItems: "center",
                maxHeight: "100%",
                marginTop: "10%",
            }}
        >
            <FlatList
                contentContainerStyle={{
                    marginBottom: 32,
                    marginTop: 16,
                    alignItems: "center",
                }}
                columnWrapperStyle={{ justifyContent: "space-between" }}
                numColumns={2}
                data={localPieChartTestData}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => {
                    return (
                        <Card
                            theme={theme}
                            elevation={5}
                            style={{
                                height: "75%",
                                width: "45%",
                                minWidth: 150,
                            }}
                        >
                            <Card.Content
                                style={{
                                    flex: 1,
                                    justifyContent: "center",
                                    alignItems: "center",
                                    top: "-20%",
                                }}
                            >
                                {/* <LabelledPieChart pieData={item.value} /> */}
                            </Card.Content>
                        </Card>
                    );
                }}
            />
        </View>
    );
}
