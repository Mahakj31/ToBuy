import React ,{useState} from "react";
import { Image, View, StyleSheet, TouchableOpacity } from 'react-native';
import { NavigationContainer, NavigationHelpersContext } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SplashScreen from "../Container/SplashScreen";
import MainScreen from "../Container/MainScreen";

const MainStack = createNativeStackNavigator();

const AppNavigation = ({ navigation , route }) => {
    return (
        <NavigationContainer>
            <MainStack.Navigator initialRouteName={'Splash'}>
                <MainStack.Screen name="Splash" component={SplashScreen} options={{ headerShown: false }} />
                <MainStack.Screen name="MainScreen" component={MainScreen} options={{headerShown : false}} />
            </MainStack.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigation;