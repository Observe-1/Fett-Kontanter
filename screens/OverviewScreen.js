import * as React from "react";
import {
    Modal,
    Text,
    View,
    StyleSheet,
    Animated,
    TouchableOpacity,
    Image,
} from "react-native";
import { Card } from "react-native-paper";

import GridCards from "../components/GridCards";
import BigCard from "../components/BigCard";
import WelcomeName from "../components/WelcomeName";
import LabelledPieChart from "../components/LabelledPieChart";
import FettKontanterView from "../components/FettKontanterView";

export default function OverviewScreen(props) {
    const [items, setItems] = React.useState([
        { name: "EMERALD", category: "lineChart" },
        {
            name: "All liabilities",
            category: "pieChart",
            //TODO Calculate this value
            value: "£75k",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#66c2a5" },
                },
                {
                    key: 2,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#8da0cb" },
                },
                {
                    key: 3,
                    value: 40,
                    pounds: "£40k",
                    svg: { fill: "#d02800" },
                },
            ],
        },
        {
            name: "All assets",
            category: "pieChart",
            value: "£125k",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#00554B" },
                },
                {
                    key: 2,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#F67280" },
                },
                {
                    key: 3,
                    value: 40,
                    pounds: "£40k",
                    svg: { fill: "#66c2a5" },
                },
                {
                    key: 4,
                    value: 95,
                    pounds: "£95k",
                    svg: { fill: "#6CFB7B" },
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
        {
            name: "All loans",
            category: "pieChart",
            value: "£55k",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#00554A" },
                },
                {
                    key: 2,
                    value: 50,
                    pounds: "£50",
                    svg: { fill: "#F67280" },
                },
            ],
        },
        { name: "PUMPKIN", category: "lineChart" },
        {
            name: "Passive Investments",
            category: "pieChart",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#00554A" },
                },
                {
                    key: 2,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#F67280" },
                },
                {
                    key: 3,
                    value: 40,
                    pounds: "£40k",
                    svg: { fill: "#977FD7" },
                },
                {
                    key: 4,
                    value: 95,
                    pounds: "£95k",
                    svg: { fill: "#F5A9CB" },
                },
            ],
        },
        {
            name: "Active Investments",
            category: "pieChart",
            pieData: [
                {
                    key: 1,
                    value: 50,
                    pounds: "£50k",
                    svg: { fill: "#99B898" },
                },
                {
                    key: 2,
                    value: 50,
                    pounds: "£100k",
                    svg: { fill: "#2A363B" },
                },
            ],
        },
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
            {/* <Modal visible={visible} onDismiss={hideModal}> */}
            <ModalPoup styles={props.styles} visible={visible}>
                {/* <Card
                    style={[
                        props.styles.modalCard,
                        {
                            backgroundColor: "rgba(0,0,0,0.7)",
                            elevation: 0,
                        },
                    ]}
                > */}
                {/* TODO Extract code (repeated from GridCards) */}
                {modalItem.category == "text" && (
                    <View>
                        <Text style={props.styles.itemName}>{item.name}</Text>
                    </View>
                )}
                {modalItem.category == "lineChart" && (
                    <Text style={props.styles.itemName}>
                        A line chart goes here
                    </Text>
                )}
                {modalItem.category == "table" && (
                    <Text style={props.styles.itemName}>A table goes here</Text>
                )}
                {modalItem.category == "pieChart" && (
                    <View style={{ flex: 0 }}>
                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Image
                                source={require("../assets/x.png")}
                                style={{ height: 30, width: 30 }}
                            />
                        </TouchableOpacity>
                        <Text style={props.styles.itemTitle}>
                            {modalItem.name}:{modalItem.value}
                        </Text>

                        <LabelledPieChart
                            style={{
                                alignSelf: "center",
                            }}
                            styles={props.styles.itemName}
                            pieData={modalItem.pieData}
                            labels={true}
                        />
                    </View>
                )}
                {/* </Card> */}
            </ModalPoup>
        </FettKontanterView>
    );
}

const ModalPoup = ({ visible, children, styles }) => {
    const [showModal, setShowModal] = React.useState(visible);
    const scaleValue = React.useRef(new Animated.Value(0)).current;
    React.useEffect(() => {
        toggleModal();
    }, [visible]);
    const toggleModal = () => {
        if (visible) {
            setShowModal(true);
            Animated.spring(scaleValue, {
                toValue: 1,
                duration: 300,
                useNativeDriver: true,
            }).start();
        } else {
            setTimeout(() => setShowModal(false), 200);
            Animated.timing(scaleValue, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true,
            }).start();
        }
    };
    return (
        <Modal transparent visible={showModal}>
            <View style={styles.modalBackGround}>
                <Animated.View
                    style={[
                        styles.modalContainer,
                        { transform: [{ scale: scaleValue }] },
                    ]}
                >
                    {children}
                </Animated.View>
            </View>
        </Modal>
    );
};
