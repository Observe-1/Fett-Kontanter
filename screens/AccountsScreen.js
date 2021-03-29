import * as React from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";
import { LinearGradient } from "expo-linear-gradient";
import { BlurView } from "expo-blur";

import { saveKeyValue, getKeyValue } from "../functions/keyStorage";

let textValue = "This was never stored...";

export default function AccountsScreen(props) {
    return (
        <LinearGradient
            colors={[
                "rgba(53,45,184,1)",
                "rgba(66,127,194,1)",
                "rgba(81,186,158,1)",
                "rgba(205,244,233,1)",
            ]}
            locations={[0, 0.25, 0.7, 1]}
            end={{ x: 1, y: 1 }}
            start={{ x: 0, y: 0 }}
            style={[props.styles.centerView, { alignItems: "center" }]}
        >
            <BlurView
                intensity={100}
                // style={[StyleSheet.absoluteFill, styles.nonBlurredContent]}
            >
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
            </BlurView>
        </LinearGradient>
    );
}
