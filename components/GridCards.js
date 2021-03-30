import * as React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";

import LabelledPieChart from "./LabelledPieChart";

export default function GridCards(props) {
    return (
        <FlatGrid
            itemDimension={140}
            data={props.data}
            style={props.styles.gridView}
            // staticDimension={300}
            // fixed
            spacing={20}
            renderItem={({ item }) => (
                <Card
                    style={[
                        props.styles.itemContainer,
                        {
                            backgroundColor: "rgba(0, 0, 0, 0.25)",
                            elevation: 0,
                        },
                    ]}
                    onPress={() => {
                        props.showModal(item);
                    }}
                >
                    {item.category == "text" && (
                        <View>
                            <Text style={props.styles.itemName}>
                                {item.name}
                            </Text>
                            <Text style={props.styles.itemCode}>
                                {item.code}
                            </Text>
                        </View>
                    )}
                    {item.category == "pieChart" && (
                        <Text style={props.styles.itemName}>
                            A pie chart goes here
                        </Text>
                    )}
                    {item.category == "lineChart" && (
                        <Text style={props.styles.itemName}>
                            A line chart goes here
                        </Text>
                    )}
                    {item.category == "table" && (
                        <Text style={props.styles.itemName}>
                            A table goes here
                        </Text>
                    )}
                    {item.category == "pieChartNew" && (
                        <View>
                            <Text style={props.styles.itemName}>
                                {item.name}:{item.value}
                            </Text>

                            <LabelledPieChart
                                styles={props.styles.itemName}
                                pieData={pieChartTestData}
                            />
                        </View>
                    )}
                </Card>
            )}
        />
    );
}

const pieChartTestData = [
    {
        key: 1,
        value: 50,
        pounds: "£50k",
        svg: { fill: "#FF6500" },
        // arc: { outerRadius: "130%", cornerRadius: 10 },
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
