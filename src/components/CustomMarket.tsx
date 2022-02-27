import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

export const CustomMarket = () => {
    return (
        <View style={s.marker}>
          <Text style={s.text}>ejemplo</Text>
        </View>
      );
}

function CustomMarker() {
    
  }
  //styles for our custom marker.
  const s = StyleSheet.create({
    marker: {
      paddingVertical: 10,
      paddingHorizontal: 30,
      backgroundColor: "#007bff",
      borderColor: "#eee",
      borderRadius: 5,
      elevation: 10,
    },
    text: {
    color: "#fff",   
    },
  });
