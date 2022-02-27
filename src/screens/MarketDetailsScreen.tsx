
import React, { } from 'react'
import { StackNavigationProp } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { RootStackNavigator } from '../routes/Navigation';
import { ModalPayment } from './ModalPayment';

interface MarketDetailsProps {
  navigation: StackNavigationProp<RootStackNavigator, "MarketDetails">
  route: any
}

export const MarketDetailsScreen = ( { route, navigation }: MarketDetailsProps) => {

  const {product} = route.params

  const imageProduct = "../image/product.png";

  return (
    <View style={s.container}>

      <View style={s.navView}>
        <TouchableOpacity onPress={() => navigation.navigate('MarketList')}>
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


      <Text style={s.category}>Product detail</Text>

      <View style={s.item}>
        <Image source={require('../image/datterino.jpg')} style={s.image} />

        <Text style={s.price}>Є {product.price}</Text>

        <View style={s.titleContainer}>
          <Text style={s.title}>{product.title}</Text>
          <Text style={s.rating}>
            <MaterialIcons name={"star"} size={20} color="#FFC312" />
            {product.rating}
          </Text>
        </View>

        <Text style={s.description}>{product.description}</Text>
            

      </View>

      <View style={s.buttonContainer}>
      <Text style={s.type}>{product.type}</Text>
      <MaterialIcons name={"favorite"} size={22} color="#e84118" />

      </View>
      <ModalPayment/>

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
  category: {
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Pacifico',
    fontSize: 50,

    color: '#3d3d3d',
  },
  item: {
    marginTop: 10,
    padding: 10,
    /* borderWidth: 5,
    borderColor: "#ff5b04",
    borderRadius: 10, */
  },
  image:{
    width: 300,
    height:300,
    marginBottom: -50,
  },
  price:{
    fontFamily:'Roboto',
    fontWeight:'bold',
    fontSize:32,
    color: '#000000',
  },
  titleContainer:{
    flexDirection: 'row',
  },
  title:{
    fontFamily: 'Baloo 2',
    fontWeight:'bold',
    fontSize: 24,

    color: '#000000',
  },
  rating:{
    fontFamily: 'Verdana',
    fontSize: 18,
    marginLeft:10,
  },
  description:{
    fontFamily:'Roboto',
    fontSize:16,
    color: '#000000',
    marginTop:10,
    marginBottom: 20,
  }, 
  type:{
    fontFamily:'Roboto',
    fontSize:16,
    color: '#666666',
    marginHorizontal: 5,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'flex-end',
    marginRight:20,
    marginTop:-20,
  },
})

