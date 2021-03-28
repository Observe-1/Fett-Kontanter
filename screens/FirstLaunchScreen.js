import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-material-ui";
import { Avatar, Card, DataTable, Paragraph } from "react-native-paper";

export default function FirstLaunchScreen() {
    const [text, onChangeText] = React.useState("");

    return (
        <View
            style={{
                flex: 1,
                backgroundColor: "#253041",
                justifyContent: "center",
            }}
        >
            <Card
                style={{
                    alignSelf: "center",
                    width: "85%",
                    padding: 15,
                }}
            >
                <Text style={{ fontSize: 40, margin: 20 }}>Hello!</Text>
                <Text style={{ fontSize: 15, margin: 20 }}>
                    Welcome to Fett Kontanter. What's your name?
                </Text>
                <Card.Content>
                    <TextInput
                        style={{ margin: 20 }}
                        onChangeText={onChangeText}
                        placeholder="Your Name"
                        value={text}
                    />
                    <Button
                        styles={{ margin: 15 }}
                        raised
                        primary
                        text="Submit"
                    />
                </Card.Content>
            </Card>
        </View>
    );
}
