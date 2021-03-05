import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import * as SecureStore from "expo-secure-store";

let textValue = "This was never stored...";

export default function AccountsScreen() {
    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text> {textValue} </Text>
            <Button
                raised
                accent
                onPress={() => {
                    save("StoredValue", "This string was stored!");
                    // onChangeKey("StoredValue");
                    // onChangeValue("This string was stored!");
                }}
                text="Button to save text"
            />
            <Button
                raised
                primary
                onPress={() => {
                    getValueFor("StoredValue");
                    // onChangeKey("StoredValue");
                    // onChangeValue("This string was stored!");
                }}
                text="Button to update text"
            />
        </View>
    );
}

async function save(key, value) {
    await SecureStore.setItemAsync(key, value);
}

async function getValueFor(key) {
    let result = await SecureStore.getItemAsync(key);
    if (result) {
        alert("🔐 Here's your value 🔐 \n" + result);
        textValue = result;
    } else {
        alert("No values stored under that key.");
        return "failure somewhere!";
    }
}
