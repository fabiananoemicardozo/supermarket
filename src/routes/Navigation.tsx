
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { NavigationContainer } from "@react-navigation/native"

import LoginScreen from "../screens/LoginScreen"
import HomeScreen from "../screens/HomeScreen"
import MarketListScreen from "../screens/MarketListScreen"
import MarketCartScreen from "../screens/MarketCartScreen"
import ProfileScreen from "../screens/ProfileScreen"
import FavoriteScreen from "../screens/FavoriteScreen"
import { MarketDetailsScreen } from "../screens/MarketDetailsScreen"
import { ModalPayment } from "../screens/ModalPayment"

import { ProductProps } from "../types/types"

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
 
 const Stack = createStackNavigator<RootStackNavigator>()






 const { Navigator, Screen } = Stack
 
 
 const Navigation = () => {
    return (
       <NavigationContainer>
          <Navigator initialRouteName={"Login"} screenOptions={{ headerShown: false }}>
             <Screen name="Login" component={LoginScreen} />
             <Screen name="Home" component={HomeScreen} />
             <Screen name="MarketList" component={MarketListScreen} />
             <Screen name="MarketDetails" component={MarketDetailsScreen} />
             <Screen name="MarketCart" component={MarketCartScreen} />
             <Screen name="Payment" component={ModalPayment} />
             <Screen name="Profile" component={ProfileScreen} />
             <Screen name="Favorite" component={FavoriteScreen} />
          </Navigator>
       </NavigationContainer>
    )
 }
 export default Navigation;


