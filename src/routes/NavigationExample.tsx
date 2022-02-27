import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/HomeScreen';
import MarketListScreen from '../screens/MarketListScreen';
import { MarketDetailsScreen } from '../screens/MarketDetailsScreen';
import MarketCartScreen from '../screens/MarketCartScreen';
import { ModalPayment } from '../screens/ModalPayment';
import ProfileScreen from '../screens/ProfileScreen';
import FavoriteScreen from '../screens/FavoriteScreen';

import { ProductProps } from '../types/types';

//Esto es una navegacion de prueva, donde se convinan  tres tipos de nav: Stack, Tab, Botton

export type RootStackNavigator = {
    Login: undefined
    Home: undefined
    MarketList: undefined
    MarketDetails: {
       product: ProductProps
    }
    MarketCart: undefined
    Payment: undefined
    Profile: undefined
    Favorite: undefined
 }

const Tab = createMaterialTopTabNavigator<RootStackNavigator>();
const TabBottom = createMaterialBottomTabNavigator<RootStackNavigator>();
const Stack = createStackNavigator<RootStackNavigator>();


export const NavigationStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="MarketList" component={MarketListScreen}/>
        <Stack.Screen name="MarketDetails" component={MarketDetailsScreen}/>
        <Stack.Screen name="MarketCart" component={MarketCartScreen}/>
        <Stack.Screen name="Payment" component={ModalPayment}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
        <Stack.Screen name="Favorite" component={FavoriteScreen}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export const NavigationBottom = () => {
  return (
    <TabBottom.Navigator>
        <TabBottom.Screen name="Login" component={LoginScreen}/>
        <TabBottom.Screen name="Home" component={HomeScreen}/>
        <TabBottom.Screen name="MarketList" component={MarketListScreen}/>
        <TabBottom.Screen name="MarketDetails" component={MarketDetailsScreen}/>
        <TabBottom.Screen name="MarketCart" component={MarketCartScreen}/>
        <TabBottom.Screen name="Payment" component={ModalPayment}/>
        <TabBottom.Screen name="Profile" component={ProfileScreen}/>
        <TabBottom.Screen name="Favorite" component={FavoriteScreen}/>
    </TabBottom.Navigator>
  );
}

export const NavigationTab = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen name="Login" component={LoginScreen}/>
        <Tab.Screen name="Home" component={HomeScreen}/>
        <Tab.Screen name="MarketList" component={MarketListScreen}/>
        <Tab.Screen name="MarketDetails" component={MarketDetailsScreen}/>
        <Tab.Screen name="MarketCart" component={MarketCartScreen}/>
        <Tab.Screen name="Payment" component={ModalPayment}/>
        <Tab.Screen name="Profile" component={ProfileScreen}/>
        <Tab.Screen name="Favorite" component={FavoriteScreen}/>
    </Tab.Navigator>
  );
}




