import React from 'react';
import { View, TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, StyleSheet, Pressable } from 'react-native';
import { useController, useFormContext, ControllerProps, UseControllerProps } from 'react-hook-form';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { PasswordHook } from './PasswordHook';

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  label: string
  name: string
  defaultValue?: string
  setFormError: Function
}

const ControlledInput = (props: TextInputProps) => {
  
  const formContext = useFormContext();
  const { formState } = formContext;
  const { name, label, rules, defaultValue, ...inputProps } = props;
  const { field } = useController({ name, rules, defaultValue });
  const hasError = Boolean(formState?.errors[name]);

  return (
    <View style={s.inputBox}>
      {label && (<Text style={s.label}>{label}</Text>)}
      <View>     
        <RNTextInput
          autoCapitalize="none"
          textAlign="left"
          style={s.input}
          onChangeText={field.onChange}
          onBlur={field.onBlur}
          value={field.value}
          {...inputProps}
        />

      <View style={s.errorContainer}>
        {hasError && (<Text style={s.error}>{formState.errors[name].message}</Text>)}
      </View>

    </View>
  </View>
  );
}

export const TextInput = (props: TextInputProps) => {

  const { name, rules, label, defaultValue, setFormError, ...inputProps } = props;
  const formContext = useFormContext();

  // Placeholder until input name is initialized
  if (!formContext || !name) {
    const msg = !formContext ? "TextInput must be wrapped by the FormProvider" : "Name must be defined"
	  console.error(msg)
    setFormError(true)
    return null
  }

  return <ControlledInput {...props} />;
};


const s = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  inputBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 280,
    height: 50,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    marginBottom: 8,
    },
  input: {
      width: 200,
      height: 40,
      fontSize: 20,
      color: '#2d3436',// El texto ingresado en el cuadro de entrada
      },
  errorContainer: {
    flex: -1,
    height: 25
  },
  error: {
    color: 'red'
  },
});


