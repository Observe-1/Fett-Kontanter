import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Card } from "react-native-paper";

import GridCards from "../components/GridCards";
import BigCard from "../components/BigCard";
import WelcomeName from "../components/WelcomeName";
import LabelledPieChart from "../components/LabelledPieChart";
import FettKontanterView from "../components/FettKontanterView";

export default function OverviewScreen(props) {
    const [items, setItems] = React.useState([
        { name: "TURQUOISE", category: "pieChart" },
        { name: "EMERALD", category: "lineChart" },
        {
            name: "All assets",
            category: "pieChartNew",
            //TODO Calculate this value
            value: "£125k",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#FF6500" },
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
        { name: "AMETHYST", category: "lineChart" },
        { name: "WET ASPHALT", category: "table" },
        { name: "GREEN SEA", category: "lineChart" },
        { name: "NEPHRITIS", category: "table" },
        { name: "BUTT HOLE", category: "lineChart" },
        { name: "WISTERIA", category: "table" },
        { name: "MIDNIGHT BLUE", category: "lineChart" },
        { name: "SUN FLOWER", category: "lineChart" },
        { name: "CARROT", category: "table" },
        { name: "ALIZARIN", category: "lineChart" },
        { name: "CONCRETE", category: "pieChart" },
        { name: "ORANGE", category: "pieChart" },
        { name: "PUMPKIN", category: "lineChart" },
        { name: "POMEGRANATE", category: "lineChart" },
        { name: "SILVER", category: "pieChart" },
        { name: "ASBESTOS", category: "pieChart" },
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
                            backgroundColor: "rgba(0,0,0,0.7)",
                            elevation: 0,
                        },
                    ]}
                >
                    {/* TODO Extract code (repeated from GridCards) */}
                    {modalItem.category == "text" && (
                        <View>
                            <Text style={props.styles.itemName}>
                                {item.name}
                            </Text>
                        </View>
                    )}
                    {modalItem.category == "pieChart" && (
                        <Text style={props.styles.itemName}>
                            A pie chart goes here
                        </Text>
                    )}
                    {modalItem.category == "lineChart" && (
                        <Text style={props.styles.itemName}>
                            A line chart goes here
                        </Text>
                    )}
                    {modalItem.category == "table" && (
                        <Text style={props.styles.itemName}>
                            A table goes here
                        </Text>
                    )}
                    {modalItem.category == "pieChartNew" && (
                        <View>
                            <Text style={props.styles.itemName}>
                                {modalItem.name}:{modalItem.value}
                            </Text>

                            <LabelledPieChart
                                styles={props.styles.itemName}
                                pieData={modalItem.pieData}
                                labels={false}
                            />
                        </View>
                    )}
                </Card>
            </Modal>
        </FettKontanterView>
    );
}
