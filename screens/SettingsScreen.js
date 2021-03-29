import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";

import FettKontanterView from "../components/FettKontanterView";

export default function SettingsScreen(props) {
    return (
        <FettKontanterView styles={props.styles}>
            <Text>Welcome to the settings screen!</Text>
        </FettKontanterView>
    );
}
