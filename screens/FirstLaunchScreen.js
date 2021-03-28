import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-material-ui";
import { Avatar, Card, DataTable, Paragraph } from "react-native-paper";

export default function FirstLaunchScreen() {
    const [text, onChangeText] = React.useState("");

    return (
        <View style={{ flex: 1, justifyContent: "center" }}>
            <Card>
                <Card.Title
                    title="Hello!"
                    subtitle="Welcome to Fett Kontanter. What's your name?"
                />
                <Card.Content>
                    <TextInput onChangeText={onChangeText} value={text} />
                    <Button raised accent text="Submit" />
                </Card.Content>
            </Card>
        </View>
    );
}
