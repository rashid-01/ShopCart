import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from '../../Screens/WelcomeScreen/WelcomeScreen';
import LoginScreen from '../../Screens/LoginScreen/LoginScreen';
import { Header } from '../../Components/Shared/Header';
import { View } from 'react-native';
import HomeScreen from '../../Screens/HomeScreen/HomeScreen';

const Stack = createStackNavigator();

const StackNavigator = ({navigation}:any) => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name="Welcome" component={WelcomeScreen}
                  options={{headerShown:false}}
                />
                <Stack.Screen name="Login" options={{ headerBackground: () => <View style={{ backgroundColor: 'transparent' }} />, headerLeft: () => { return null }, headerTitle: () => <Header/> }} component={LoginScreen} />
                <Stack.Screen name="Home" options={{ headerBackground: () => <View style={{backgroundColor:'transparent'}}/>, headerLeft:() => {return null}, headerTitle:() => <Header/>}} component={HomeScreen}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigator;