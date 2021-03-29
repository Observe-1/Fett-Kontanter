import React, { useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Button } from "react-native-material-ui";
import { Modal, Card } from "react-native-paper";
import { FlatGrid } from "react-native-super-grid";

import getPrimaryUser from "../functions/dba/getPrimaryUser";

export default function OverviewScreen(props) {
    const [user, onChangeUser] = React.useState("");

    const [items, setItems] = React.useState([
        { name: "TURQUOISE", code: "#1abc9c", category: "pieChart" },
        { name: "EMERALD", code: "#2ecc71", category: "lineChart" },
        { name: "PETER RIVER", code: "#3498db", category: "text" },
        { name: "AMETHYST", code: "#9b59b6", category: "text" },
        { name: "WET ASPHALT", code: "#34495e", category: "table" },
        { name: "GREEN SEA", code: "#16a085", category: "lineChart" },
        { name: "NEPHRITIS", code: "#27ae60", category: "table" },
        { name: "BELIZE HOLE", code: "#2980b9", category: "text" },
        { name: "WISTERIA", code: "#8e44ad", category: "text" },
        { name: "MIDNIGHT BLUE", code: "#2c3e50", category: "text" },
        { name: "SUN FLOWER", code: "#f1c40f", category: "text" },
        { name: "CARROT", code: "#e67e22", category: "table" },
        { name: "ALIZARIN", code: "#e74c3c", category: "lineChart" },
        { name: "CONCRETE", code: "#95a5a6", category: "text" },
        { name: "ORANGE", code: "#f39c12", category: "text" },
        { name: "PUMPKIN", code: "#d35400", category: "text" },
        { name: "POMEGRANATE", code: "#c0392b", category: "lineChart" },
        { name: "SILVER", code: "#bdc3c7", category: "text" },
        { name: "ASBESTOS", code: "#7f8c8d", category: "text" },
    ]);

    if (user == "") {
        getPrimaryUser(props.db).then((user) => onChangeUser(user));
    }

    //TODO improve
    const [visible, setVisible] = React.useState(false);
    const [modalContent, setmodalContent] = React.useState("");

    function showModal(category) {
        setmodalContent(category);
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
                <Text style={{ fontSize: 25 }}>Hello {user.name}!</Text>
                <Text style={{ fontSize: 20 }}>
                    Let's look at your portfolio.
                </Text>
            </View>
            <View
                style={[
                    styles.itemContainer,
                    {
                        backgroundColor: "#7f8c8d",
                        marginTop: 20,
                        marginLeft: 20,
                        marginRight: 20,
                        maxHeight: 250,
                    },
                ]}
            >
                <Text style={styles.itemName}>A BIG line chart goes here</Text>
            </View>
            <FlatGrid
                itemDimension={140}
                data={items}
                style={styles.gridView}
                // staticDimension={300}
                // fixed
                spacing={20}
                renderItem={({ item }) => (
                    <Card
                        // elevation={5}
                        style={[
                            styles.itemContainer,
                            { backgroundColor: item.code },
                        ]}
                        onPress={() => {
                            showModal(item.category);
                        }}
                    >
                        {item.category == "text" && (
                            <View>
                                <Text style={styles.itemName}>{item.name}</Text>
                                <Text style={styles.itemCode}>{item.code}</Text>
                            </View>
                        )}
                        {item.category == "pieChart" && (
                            <Text style={styles.itemName}>
                                A pie chart goes here
                            </Text>
                        )}
                        {item.category == "lineChart" && (
                            <Text style={styles.itemName}>
                                A line chart goes here
                            </Text>
                        )}
                        {item.category == "table" && (
                            <Text style={styles.itemName}>
                                A table goes here
                            </Text>
                        )}
                    </Card>
                )}
            />
            <Modal
                style={{ absolute: 1 }}
                visible={visible}
                onDismiss={hideModal}
            >
                <Card
                    // elevation={5}
                    style={[
                        styles.itemContainer,
                        {
                            minHeight: "80%",
                            marginLeft: 20,
                            marginRight: 20,
                        },
                    ]}
                >
                    <Text>{modalContent}</Text>
                </Card>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    gridView: {
        marginTop: 20,
        flex: 1,
        flexGrow: 1,
    },
    itemContainer: {
        flex: 1,
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
