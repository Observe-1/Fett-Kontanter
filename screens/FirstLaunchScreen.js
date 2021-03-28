import * as React from "react";
import { Text, View, TextInput } from "react-native";
import { Button } from "react-native-material-ui";
import { Card } from "react-native-paper";
import { Restart } from "fiction-expo-restart";

function submitName(db, userName) {
    db.transaction((tx) => {
        tx.executeSql(
            `INSERT INTO users (user_id, name) VALUES (0, '${userName}');`,
            [],
            success,
            error,
        );
    });
}

//TODO do this better
function success() {
    Restart();
}
function error(transaction, error) {
    alert(error);
}

export default function FirstLaunchScreen(props) {
    const [userName, onChangeuserName] = React.useState("");
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
                        onChangeText={onChangeuserName}
                        placeholder="Your Name"
                        value={userName}
                    />
                    <Button
                        styles={{ margin: 15 }}
                        raised
                        primary
                        onPress={function () {
                            submitName(props.db, userName);
                        }}
                        text="Submit"
                    />
                </Card.Content>
            </Card>
        </View>
    );
}
