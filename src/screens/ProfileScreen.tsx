import { StackNavigationProp } from "@react-navigation/stack"
import React from "react"

import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { RootStackNavigator } from "../routes/Navigation"

interface ProfileProps {
  navigation: StackNavigationProp<RootStackNavigator, "Profile">
}

const ProfileScreen = ({ navigation }: ProfileProps) => {
  return (
    <View style={s.container}>

    <View style={s.navView}>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Text><MaterialIcons name={"arrow-back-ios"} size={22} color="#C7C7CC" /></Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('Home')}>
        <Text style={s.textNav}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('MarketList')}>
        <Text style={s.textNav}>Products</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => navigation.navigate('Favorite')}>
        <Text style={s.textNav}>Favorite</Text>
      </TouchableOpacity>
      <TouchableOpacity    
      onPress={() => navigation.navigate('Payment')}>
      <Text><MaterialIcons name={"local-grocery-store"} size={22} color="#C7C7CC"  /></Text>
    </TouchableOpacity>
    </View>

    <Text style={s.titleCategory}>Profile</Text>

  </View>
  )
}

const s = StyleSheet.create({
    container: {
      flex: 1,
      paddingTop: 30,
      paddingHorizontal: 10,
      backgroundColor: '#ffffff',
    },
    navView: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: -40,
      marginLeft: -10,
      marginRight: -10,
      marginBottom: -20,
      backgroundColor: '#ffffff',
    },
    textNav: {
      fontSize: 20,
      padding: 10,
      textAlign: "center",
    },
    titleCategory: {
      textAlign: 'center',
      paddingTop: 20,
      fontFamily: 'Pacifico',
      fontSize: 50,
  
      color: '#3d3d3d',
    },  
  })
  

export default ProfileScreen;
