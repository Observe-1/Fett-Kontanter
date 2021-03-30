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
                                pieData={item.pieData}
                                labels={false}
                            />
                        </View>
                    )}
                </Card>
            )}
        />
    );
}
