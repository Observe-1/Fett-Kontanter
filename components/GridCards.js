import * as React from "react";
import { Text, View } from "react-native";
import { Card } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";

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
                    // elevation={5}
                    style={[
                        props.styles.itemContainer,
                        { backgroundColor: item.code },
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
                </Card>
            )}
        />
    );
}
