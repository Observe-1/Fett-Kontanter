import * as React from "react";
import { Text } from "react-native";
import getPrimaryUser from "../functions/dba/getPrimaryUser";

export default function WelcomeName(props) {
    const [user, onChangeUser] = React.useState("");

    if (user == "") {
        getPrimaryUser(props.db).then((user) => onChangeUser(user));
    }

    return <Text style={{ fontSize: props.fontSize }}>Hello {user.name}!</Text>;
}
