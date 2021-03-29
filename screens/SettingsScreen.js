import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";

export default function SettingsScreen(props) {
    return (
        <View style={[props.styles.centerView, { alignItems: "center" }]}>
            <Text>Settings!</Text>
            <Button raised accent text="Button to nowhere lol" />
        </View>
    );
}
