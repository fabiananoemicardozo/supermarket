
import React, { useState, useCallback } from "react"
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form';
import { StackNavigationProp } from "@react-navigation/stack"
import { Button, Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import { PasswordHook } from "../components/PasswordHook"
import { RootStackNavigator } from "../routes/Navigation"
import { TextInput } from '../components/TextInput'

type FormValues = {
  email: string;
  password: string;
};

interface LoginProps {
  navigation: StackNavigationProp<RootStackNavigator, "Login">
}

const LoginScreen = ({ navigation }: LoginProps) => {

  const { passwordVisibility, rightIcon, handlePasswordVisibility } = PasswordHook();
  
  const {...methods} = useForm({mode: 'onChange'});

  const onSubmit = (data: any) => { navigation.navigate('Home') };

  const [formError, setError] = useState<Boolean>(false)
   
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({errors})
  }

  return (

    <View style={s.container}>
      <Image source={require('../image/logo.png')} />
      <Text style={s.titleCategory}>LogIn</Text>


      <View>
        {formError ? <View><Text style={{ color: 'red' }}>There was a problem with loading the form. Please try again later.</Text></View> :
          <>
            <FormProvider {...methods}>
            
              <View>
              {/* <MaterialIcons name={"perm-identity"} size={22} color="#C7C7CC" /> */}

              
                <TextInput               
                name="email"
                label="Email"
                placeholder="write your email"
                keyboardType="email-address"
                rules={{
                  required: 'Email is required!',
                  pattern: {
                    value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                    message: 'Must be formatted: example@email.com',
                  },
                }}
                setFormError={setError}
              />
              </View>
              <View>
                {/* <Pressable onPress={handlePasswordVisibility}>
                  <MaterialIcons name={"visibility"} size={22} color="#C7C7CC" /> 
                </Pressable> */}
                <TextInput
                name="password"
                label="Password"
                secureTextEntry
                placeholder="**********"
                rules={{ required: 'Password is required!' }}
                setFormError={setError}
                />
              </View>              
            </FormProvider>
          </>
        }


        <TouchableOpacity
          style={s.loginbutton}
          onPress={methods.handleSubmit(onSubmit, onError)}>
          <Text>Login</Text>
        </TouchableOpacity>

      </View>

    </View>
  )
}




const s = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    backgroundColor: '#FFD338',
  },
  titleCategory: {
    textAlign: 'center',
    paddingTop: 20,
    fontFamily: 'Pacifico',
    fontSize: 40,
    marginBottom:20,

    color: '#ffffff',
    },
    loginbutton: {
      height: 50,
      width: 280,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 8,
      backgroundColor: '#ff5b04',
      marginTop: 20, 
      },
  containerform: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,
    padding: 8,
    backgroundColor: '#0e101c',
  },


})

export default LoginScreen;


{/* <View
style={s.inputBox}>
<MaterialIcons name={"perm-identity"} size={22} color="#C7C7CC" />
<TextInput
  style={s.input}
  autoCapitalize='none'
  underlineColorAndroid={'transparent'}
  placeholderTextColor={'#ccc'}
  placeholder={'username'}
/>
</View>

<View
style={s.inputBox}>
<Pressable onPress={handlePasswordVisibility}>
  <MaterialIcons name={"visibility"} size={22} color="#C7C7CC" /> 
</Pressable>
<TextInput
  style={s.input}
  autoCapitalize='none'
  underlineColorAndroid={'transparent'}
  secureTextEntry={passwordVisibility}
  placeholderTextColor={'#ccc'}
  placeholder={'password'}
/>

</View> */}