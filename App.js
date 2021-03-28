import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as SQLite from "expo-sqlite";
import { Platform } from "react-native";
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
import truncateDatabase from "./functions/dba/truncateDatabase";
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
            truncateDatabase(db);
            AsyncStorage.setItem("firstLaunch", "false");
            return <FirstLaunchScreen db={db} />;
        } else {
            console.log("Rendering app.");

            //TODO Remove Dev Tools
            // truncateDatabase(db);
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
                children={() => <AccountsScreen db={props.db} />}
                options={{
                    tabBarLabel: "Accounts",
                    tabBarColor: "#009387",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-card" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Flows"
                children={() => <FlowsScreen db={props.db} />}
                options={{
                    tabBarLabel: "Flows",
                    tabBarColor: "#1f65ff",
                    tabBarIcon: ({ color }) => (
                        <Icon name="swap-horizontal" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Overview"
                children={() => <OverviewScreen db={props.db} />}
                options={{
                    tabBarLabel: "Overview",
                    tabBarColor: "#694fad",
                    tabBarIcon: ({ color }) => (
                        <Icon name="ios-home" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Portfolio"
                children={() => <PortfolioScreen db={props.db} />}
                options={{
                    tabBarLabel: "Portfolio",
                    tabBarColor: "#d02860",
                    tabBarIcon: ({ color }) => (
                        <Icon name="pie-chart" color={color} size={24} />
                    ),
                }}
            />

            <Tab.Screen
                name="Settings"
                children={() => <SettingsScreen db={props.db} />}
                options={{
                    tabBarLabel: "Settings",
                    tabBarColor: "#ff0002",
                    tabBarIcon: ({ color }) => (
                        <Icon name="settings-sharp" color={color} size={24} />
                    ),
                }}
            />
        </Tab.Navigator>
    );
}
