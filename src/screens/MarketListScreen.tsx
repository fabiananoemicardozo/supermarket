import React, { useState } from "react"
import { StackNavigationProp } from "@react-navigation/stack"

import {FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

import { RootStackNavigator } from "../routes/Navigation"
import products from '../json/products.json';
import { ProductProps } from "../types/types";
import { PickerExample } from "../components/PickerExample";


interface MarketListProps {
  navigation: StackNavigationProp<RootStackNavigator, "MarketList">
}

const MarketListScreen = ({ navigation }: MarketListProps) => {


  const [prod , setProd] = useState<ProductProps[]>(products)

  const [text, onChangeText] = React.useState ("Enter the name of your nearest store");



  
  return (
    <View style={s.container}>

      <View style={s.navView}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <MaterialIcons name={"arrow-back-ios"} size={22} color="#ffffff" />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}>
          <Text style={s.textNav}>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Profile')}>
          <Text style={s.textNav}>Profile</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Favorite')}>
          <Text style={s.textNav}>Favorites</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
          <MaterialIcons name={"local-grocery-store"} size={22} color="#ffffff" />
        </TouchableOpacity>
      </View>

      <PickerExample/>

      <View style={s.inputBox}>
        <TextInput 
          style={s.input}
          onChangeText={onChangeText}
          value={text}
        />
        <MaterialIcons name={"filter-list-alt"} size={22} color="#ffffff" />

      </View>
        <FlatList
          data={prod} renderItem={({ item, index }) => {
            return (
              <View style={s.itemcontainer}>
                <TouchableOpacity onPress={() => navigation.navigate('MarketDetails', { product: item } )}>
                  <Text style={s.item} >{item.title}</Text>
                </TouchableOpacity>

                <TouchableOpacity onPress={() => navigation.navigate('Payment')}>
                  <MaterialIcons name={"local-grocery-store"} style={s.iconItem}size={22} color="#7f8c8d"/>
                </TouchableOpacity>
              </View>
            )
          }} />
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
    height: 60,
    backgroundColor: '#ffd338',
  },
  textNav: {
    fontSize: 20,
    paddingHorizontal: 24,
    textAlign:'center',
    color: '#ffffff',
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 350,
    height: 41,
    left: 10,
    top: 40,
    borderRadius: 8,
    backgroundColor: '#dcdde1',
    marginBottom: 50,
  },
  input: {
    width: 300,
    height: 40,
    fontSize: 15,
    marginLeft:20,
    marginRight:-10,

    color: '#2d3436',
  },
  itemcontainer: {
    flexDirection: 'row',
    height: 60,   
  },
  item: {
    alignItems: 'center',
    fontFamily: 'Verdana',
    fontSize: 17,
    width: 320,

    marginTop: 10,
    padding: 10,
    borderWidth: 2,

    borderColor: "#dcdde1",
    color: 'black',
  },
  iconItem: {
    marginTop: 10,
    padding: 10, 
  }

});
export default MarketListScreen;

