import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";

export default function SettingsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Settings!</Text>
            <Button raised accent text="Button to nowhere lol" />
        </View>
    );
}
