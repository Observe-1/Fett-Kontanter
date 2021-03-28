import React, { useEffect } from "react";
import { Text, View } from "react-native";
import { Button } from "react-native-material-ui";

import getPrimaryUser from "../functions/dba/getPrimaryUser";

export default function OverviewScreen(props) {
    const [user, onChangeUser] = React.useState("");

    if (user == "") {
        getPrimaryUser(props.db).then((user) => onChangeUser(user));
    }

    return (
        <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
            <Text>Hello {user.name}!</Text>
            <Button raised accent text="Add fat cash button" />
        </View>
    );
}
