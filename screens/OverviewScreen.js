import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Card } from "react-native-paper";

import GridCards from "../components/GridCards";
import BigCard from "../components/BigCard";
import WelcomeName from "../components/WelcomeName";

export default function OverviewScreen(props) {
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

    const [visible, setVisible] = React.useState(false);
    const [modalItem, setmodalItem] = React.useState("");

    function showModal(item) {
        setmodalItem(item);
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

    return (
        <View style={{ flex: 1 }}>
            <View style={{ marginTop: 50, marginLeft: 10, marginRight: 10 }}>
                <WelcomeName db={props.db} fontSize={25} />
                <Text style={{ fontSize: 20 }}>
                    Let's look at your portfolio.
                </Text>
            </View>
            <BigCard styles={styles} />
            <GridCards data={items} showModal={showModal} styles={styles} />
            <Modal visible={visible} onDismiss={hideModal}>
                <Card
                    style={[
                        styles.modalCard,
                        {
                            backgroundColor: modalItem.code,
                            elevation: 0,
                        },
                    ]}
                >
                    <Text>
                        {modalItem.name +
                            " - " +
                            modalItem.category +
                            " - " +
                            modalItem.code}
                    </Text>
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
    modalCard: {
        flex: 1,
        justifyContent: "flex-end",
        borderRadius: 10,
        padding: 10,
        minHeight: "80%",
        marginLeft: 20,
        marginRight: 20,
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
