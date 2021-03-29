import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-material-ui";
import { FlatGrid } from "react-native-super-grid";

import getPrimaryUser from "../functions/dba/getPrimaryUser";

export default function OverviewScreen(props) {
    const [user, onChangeUser] = React.useState("");

    const [items, setItems] = React.useState([
        { name: "TURQUOISE", code: "#1abc9c" },
        { name: "EMERALD", code: "#2ecc71" },
        { name: "PETER RIVER", code: "#3498db" },
        { name: "AMETHYST", code: "#9b59b6" },
        { name: "WET ASPHALT", code: "#34495e" },
        { name: "GREEN SEA", code: "#16a085" },
        { name: "NEPHRITIS", code: "#27ae60" },
        { name: "BELIZE HOLE", code: "#2980b9" },
        { name: "WISTERIA", code: "#8e44ad" },
        { name: "MIDNIGHT BLUE", code: "#2c3e50" },
        { name: "SUN FLOWER", code: "#f1c40f" },
        { name: "CARROT", code: "#e67e22" },
        { name: "ALIZARIN", code: "#e74c3c" },
        { name: "CLOUDS", code: "#ecf0f1" },
        { name: "CONCRETE", code: "#95a5a6" },
        { name: "ORANGE", code: "#f39c12" },
        { name: "PUMPKIN", code: "#d35400" },
        { name: "POMEGRANATE", code: "#c0392b" },
        { name: "SILVER", code: "#bdc3c7" },
        { name: "ASBESTOS", code: "#7f8c8d" },
    ]);

    if (user == "") {
        getPrimaryUser(props.db).then((user) => onChangeUser(user));
    }

    return (
        <View>
            <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 25 }}>Hello {user.name}!</Text>
                <Text style={{ fontSize: 20 }}>
                    Let's look at your portfolio.
                </Text>
                <Button
                    style={{ marginLeft: 50, marginRight: 10 }}
                    raised
                    accent
                    text="Add fat cash button"
                />
            </View>
            <FlatGrid
                itemDimension={140}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={20}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.itemContainer,
                            { backgroundColor: item.code },
                        ]}
                    >
                        <Text style={styles.itemName}>{item.name}</Text>
                        <Text style={styles.itemCode}>{item.code}</Text>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 0,
        //TODO improve max height
        height: "84%",
    },
    itemContainer: {
        justifyContent: "flex-end",
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    itemName: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
    itemCode: {
        fontWeight: "600",
        fontSize: 12,
        color: "#fff",
    },
});
