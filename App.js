import * as React from "react";
import * as SplashScreen from "expo-splash-screen";
import * as SQLite from "expo-sqlite";
import AsyncStorage from "@react-native-community/async-storage";
import { NavigationContainer } from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import Icon from "react-native-vector-icons/Ionicons";

import AccountsScreen from "./screens/AccountsScreen";
import FlowsScreen from "./screens/FlowsScreen";
import OverviewScreen from "./screens/OverviewScreen";
import PortfolioScreen from "./screens/PortfolioScreen";
import SettingsScreen from "./screens/SettingsScreen";

const Tab = createMaterialBottomTabNavigator();
const db = SQLite.openDatabase("./schema/fettKontanter.db");

export default function App() {
    //TODO Remove (Keeps splash screen on)
    SplashScreen.preventAutoHideAsync();
    setTimeout(SplashScreen.hideAsync, 1000);

    AsyncStorage.getItem("alreadyLaunchedBool").then((value) => {
        if (value == null) {
            AsyncStorage.setItem("alreadyLaunchedBool", "true");

            console.log("First time setup done.");
        }
    });

    return (
        <NavigationContainer>
            <AppTabs />
        </NavigationContainer>
    );
}

function AppTabs() {
    return (
        <Tab.Navigator>
            <Tab.Screen
                name="Accounts"
                component={AccountsScreen}
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
                component={FlowsScreen}
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
                component={OverviewScreen}
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
                component={PortfolioScreen}
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
                component={SettingsScreen}
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
