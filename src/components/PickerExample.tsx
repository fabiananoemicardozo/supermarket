import * as React from 'react';
import {Text, View, StyleSheet, Button} from 'react-native';
import {Picker} from '@react-native-picker/picker';
import { useState } from 'react';

export const PickerExample = () => {

    const [selectedLanguage, setSelectedLanguage] = useState();
  return (
      <View>
          <Picker
              selectedValue={selectedLanguage}
              onValueChange={(itemValue, itemIndex) =>
                  setSelectedLanguage(itemValue)
              }>
              <Picker.Item label="Vegetable" value="vegetable" />
              <Picker.Item label="Meat" value="meat" />
              <Picker.Item label="Care" value="care" />
              <Picker.Item label="Candy" value="candy" />
              <Picker.Item label="Pasta" value="pasta" />
              <Picker.Item label="Drinks" value="drinks" />
          </Picker>
      </View>
  )
}
