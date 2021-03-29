import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import { saveKeyValue, getKeyValue } from "../functions/keyStorage";

let textValue = "This was never stored...";

export default function AccountsScreen(props) {
    return (
        <View style={[props.styles.centerView, { alignItems: "center" }]}>
            <Text> {textValue} </Text>
            <Button
                raised
                accent
                onPress={() => {
                    saveKeyValue("StoredValue", "This string was stored!");
                    // onChangeKey("StoredValue");
                    // onChangeValue("This string was stored!");
                }}
                text="Button to save text"
            />
            <Button
                raised
                primary
                onPress={() => {
                    getKeyValue("StoredValue");
                }}
                text="Button to update text"
            />
        </View>
    );
}
