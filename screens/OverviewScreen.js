import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import { Modal, Card } from "react-native-paper";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

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
        { name: "BUTT HOLE", code: "#2980b9", category: "text" },
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
        <LinearGradient
            style={{ flex: 1 }}
            // colors={[
            //     "rgba(53,45,184,1)",
            //     "rgba(66,127,194,1)",
            //     "rgba(81,186,158,1)",
            //     "rgba(205,244,233,1)",
            // ]}
            // locations={[0, 0.3, 0.7, 1]}
            // end={{ x: 1, y: 1 }}
            // start={{ x: 0, y: 0 }}

            // colors={["rgba(194,46,208,1)", "rgba(95,250,224,1)"]}
            // locations={[0, 1]}
            // end={{ x: 1, y: 1 }}
            // start={{ x: 0, y: 0 }}

            colors={["#2F3A4A", "rgba(80,92,112,1)", "rgba(255,204,82,1)"]}
            locations={[0, 0.5, 1]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={[props.styles.centerView, { alignItems: "center" }]}
        >
            <BlurView
                intensity={0}
                // style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
            >
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
            </BlurView>
        </LinearGradient>
    );
}
