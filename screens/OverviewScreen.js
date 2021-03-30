import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Card } from "react-native-paper";

import GridCards from "../components/GridCards";
import BigCard from "../components/BigCard";
import WelcomeName from "../components/WelcomeName";
import FettKontanterView from "../components/FettKontanterView";

export default function OverviewScreen(props) {
    const [items, setItems] = React.useState([
        { name: "TURQUOISE", code: "#1abc9c", category: "pieChart" },
        { name: "EMERALD", code: "#2ecc71", category: "lineChart" },
        {
            name: "All assets",
            code: "#3498db",
            category: "pieChartNew",
            value: "£125k",
            pieData: [
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
            ],
        },
        { name: "AMETHYST", code: "#9b59b6", category: "lineChart" },
        { name: "WET ASPHALT", code: "#34495e", category: "table" },
        { name: "GREEN SEA", code: "#16a085", category: "lineChart" },
        { name: "NEPHRITIS", code: "#27ae60", category: "table" },
        { name: "BUTT HOLE", code: "#2980b9", category: "lineChart" },
        { name: "WISTERIA", code: "#8e44ad", category: "table" },
        { name: "MIDNIGHT BLUE", code: "#2c3e50", category: "lineChart" },
        { name: "SUN FLOWER", code: "#f1c40f", category: "lineChart" },
        { name: "CARROT", code: "#e67e22", category: "table" },
        { name: "ALIZARIN", code: "#e74c3c", category: "lineChart" },
        { name: "CONCRETE", code: "#95a5a6", category: "pieChart" },
        { name: "ORANGE", code: "#f39c12", category: "pieChart" },
        { name: "PUMPKIN", code: "#d35400", category: "lineChart" },
        { name: "POMEGRANATE", code: "#c0392b", category: "lineChart" },
        { name: "SILVER", code: "#bdc3c7", category: "pieChart" },
        { name: "ASBESTOS", code: "#7f8c8d", category: "pieChart" },
    ]);

    const [visible, setVisible] = React.useState(false);
    const [modalItem, setmodalItem] = React.useState("");

    function showModal(item) {
        setmodalItem(item);
        setVisible(true);
    }
    const hideModal = () => setVisible(false);

    return (
        <FettKontanterView styles={props.styles}>
            <View style={props.styles.topTextSection}>
                <WelcomeName db={props.db} fontSize={25} />
                <Text style={{ fontSize: 20 }}>
                    Let's look at your portfolio.
                </Text>
            </View>
            <BigCard styles={props.styles} />
            <GridCards
                data={items}
                showModal={showModal}
                styles={props.styles}
            />
            <Modal visible={visible} onDismiss={hideModal}>
                <Card
                    style={[
                        props.styles.modalCard,
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
        </FettKontanterView>
    );
}
