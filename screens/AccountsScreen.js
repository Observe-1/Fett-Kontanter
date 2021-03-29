import * as React from "react";
import { Text } from "react-native";
import FettKontanterView from "../components/FettKontanterView";

export default function AccountsScreen(props) {
    return (
        <FettKontanterView
            style={{ alignItems: "center" }}
            styles={props.styles}
        >
            <Text style={{ fontSize: 25 }}>
                Welcome to the accounts screen!
            </Text>
        </FettKontanterView>
    );
}
