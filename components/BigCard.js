import * as React from "react";
import { Text, View } from "react-native";

export default function GridCards(props) {
    return (
        <View
            style={[
                props.styles.itemContainer,
                {
                    backgroundColor: "#7f8c8d",
                    marginTop: 20,
                    marginLeft: 20,
                    marginRight: 20,
                    maxHeight: 250,
                },
            ]}
        >
            <Text style={props.styles.itemName}>
                A BIG line chart goes here
            </Text>
        </View>
    );
}
