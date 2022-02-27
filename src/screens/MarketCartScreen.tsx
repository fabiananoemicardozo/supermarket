import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"

import { Button, Text, TouchableWithoutFeedback, View } from "react-native"
import { RootStackNavigator } from "../routes/Navigation"

interface MarketCartProps {
  navigation: StackNavigationProp<RootStackNavigator, "MarketCart">
}

const MarketCartScreen = ({ navigation }: MarketCartProps) => {
  return (
     <View>
        <Button title="Modal Payment" onPress={() => navigation.navigate('Payment')}/>
        <Text>Welcome</Text>
     </View>
  )
}

export default MarketCartScreen;