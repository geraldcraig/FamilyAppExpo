import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";

import CalendarScreen from "./screens/CalendarScreen";
import Calendar from './screens/Calendar';

import ChatListScreen from "./screens/ChatListScreen";
import ChatScreen from "./screens/ChatScreen";
import ChatSettingsScreen from "./screens/ChatSettingsScreen";
import SettingsScreen from "./screens/SettingsScreen";
import SignInScreen from "./screens/SignInScreen";
import SignUpScreen from "./screens/SignUpScreen";
import CalendarComponent from "./screens/CalendarComponent";
import SignupForm from "./screens/SignupForm";
import TextInputExample from "./screens/TextInputExample";
import ButtonExample from "./screens/ButtonExample";
import SignInForm from "./components/SignInForm";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

// const getIsSignedIn = () => {
//     // custom logic
//     return false;
// };

function Home() {
    return (
        <Tab.Navigator initialRouteName="Chats">
            <Tab.Screen name="Chats" component={ChatListScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
            <Tab.Screen name="Calendar" component={CalendarComponent} />
        </Tab.Navigator>
    );
}

export default function App() {
    const isSignedIn = false;

    return (
        <NavigationContainer>
            <Stack.Navigator>
                {isSignedIn ? (
                    <>
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
                        <Stack.Screen name="ChatScreen" component={ChatScreen} />
                        <Stack.Screen name="ChatSettings" component={ChatSettingsScreen} />
                        <Stack.Screen name="Calendar" component={CalendarComponent} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="SignIn" component={SignInForm} />
                        <Stack.Screen name="SignUp" component={SignupForm} />
                    </>
                )}
            </Stack.Navigator>
        </NavigationContainer>
    );
}