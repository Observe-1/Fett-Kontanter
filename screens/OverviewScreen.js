import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";

export default function OverviewScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Fett Kontanter</Text>
            <Button raised accent text="Add fat cash button" />
        </View>
    );
}
