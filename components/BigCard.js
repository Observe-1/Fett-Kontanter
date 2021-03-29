import * as React from "react";
import { Text, View } from "react-native";

export default function GridCards(props) {
    return (
        <View style={props.styles.bigCard}>
            <Text style={props.styles.itemName}>
                A BIG line chart goes here
            </Text>
        </View>
    );
}
