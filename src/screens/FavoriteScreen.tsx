
import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"

import { Button, Text, TouchableWithoutFeedback, View } from "react-native"
import { PickerExample } from "../components/PickerExample"
import { RootStackNavigator } from "../routes/Navigation"

interface FavoriteProps {
  navigation: StackNavigationProp<RootStackNavigator, "Favorite">
}

const FavoriteScreen = ({ navigation }: FavoriteProps) => {
  return (
     <View>
        <PickerExample/>
     </View>
  )
}

export default FavoriteScreen ;