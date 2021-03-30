import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as SQLite from "expo-sqlite";
import { StyleSheet } from "react-native";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import AccountsScreen from "./screens/AccountsScreen";
import FlowsScreen from "./screens/FlowsScreen";
import OverviewScreen from "./screens/OverviewScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import SettingsScreen from "./screens/SettingsScreen";
import FirstLaunchScreen from "./screens/FirstLaunchScreen";
import LoadingScreen from "./screens/LoadingScreen";

import createDatabase from "./functions/dba/createDatabase";
import truncateUserTable from "./functions/dba/truncateUserTable";
import createPrimaryUserDEBUG from "./functions/dba/createPrimaryUserDEBUG";

const Tab = createMaterialBottomTabNavigator();

const db = SQLite.openDatabase("fettKontanter.db");

export default class App extends React.Component {
    constructor() {
        super();
        this.state = { firstLaunch: "notRetrieved" };
    }

    componentDidMount() {
        //TODO Remove
        // AsyncStorage.clear();
        AsyncStorage.getItem("firstLaunch").then((value) => {
            this.setState({ firstLaunch: value });
        });
    }

    render() {
        if (this.state.firstLaunch == "notRetrieved") {
            return <LoadingScreen />;
        } else if (this.state.firstLaunch === null) {
            console.log("First time setup initialising.");
            createDatabase(db);
            AsyncStorage.setItem("firstLaunch", "false");
            return <FirstLaunchScreen db={db} />;
        } else {
            console.log("Rendering app.");

            //TODO Remove Dev Tools
            // truncateUserTable(db);
            // createPrimaryUserDEBUG(db);
            return (
                <NavigationContainer>
                    <AppTabs db={db} />
                </NavigationContainer>
            );
        }
    }
}

function AppTabs(props) {
    return (
        <Tab.Navigator initialRouteName="Overview">
            <Tab.Screen
                name="Accounts"
                children={() => (
                    <AccountsScreen db={props.db} styles={styles} />
                )}
                options={{
                    tabBarLabel: "Accounts",
                    tabBarColor: "#3e4a95",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-card" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Flows"
                children={() => <FlowsScreen db={props.db} styles={styles} />}
                options={{
                    tabBarLabel: "Flows",
                    tabBarColor: "#323d75",
                    tabBarIcon: ({ color }) => (
                        <Icon name="swap-horizontal" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Overview"
                children={() => (
                    <OverviewScreen db={props.db} styles={styles} />
                )}
                options={{
                    tabBarLabel: "Overview",
                    tabBarColor: "#344052",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Portfolio"
                children={() => (
                    <PortfolioScreen db={props.db} styles={styles} />
                )}
                options={{
                    tabBarLabel: "Portfolio",
                    tabBarColor: "#323d75",
                    tabBarIcon: ({ color }) => (
                        <Icon name="pie-chart" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                children={() => (
                    <SettingsScreen db={props.db} styles={styles} />
                )}
                options={{
                    tabBarLabel: "Settings",
                    tabBarColor: "#3e4a95",
                    tabBarIcon: ({ color }) => (
                        <Icon name="settings-sharp" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}

const styles = StyleSheet.create({
    topTextSection: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10,
    },
    centerView: {
        flex: 1,
        justifyContent: "center",
    },
    gridView: {
        marginTop: 20,
        flex: 1,
        flexGrow: 1,
    },
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        height: 150,
    },
    bigCard: {
        flex: 1,
        justifyContent: "flex-end",
        padding: 10,
        backgroundColor: "rgba(0, 0, 0, 0.1)",
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        maxHeight: 250,
    },
    modalCard: {
        flex: 1,
        justifyContent: "flex-end",
        borderRadius: 10,
        padding: 10,
        minHeight: "80%",
        marginLeft: 20,
        marginRight: 20,
    },
    itemName: {
        fontSize: 16,
        color: "#fff",
        fontWeight: "600",
    },
    itemTitle: {
        fontSize: 30,
        color: "#fff",
        fontWeight: "800",
    },
    itemCode: {
        fontWeight: "600",
        fontSize: 12,
        color: "#fff",
    },
    pieChartLabels: {
        fontWeight: "900",
        fontSize: 20,
        color: "#fff",
    },
});
