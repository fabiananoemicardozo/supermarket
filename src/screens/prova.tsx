import React from 'react';
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native';
import { useForm, FormProvider, SubmitHandler, SubmitErrorHandler, Controller } from 'react-hook-form';

type FormValues = {
    email: string;
    password: string;
  };
  
export const Prova = () => {
  const { register, setValue, handleSubmit, control, reset, formState: { errors } } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
   
  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log(errors)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>First name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="email"
        rules={{ required: true }}
      />
      <Text style={styles.label}>Last name</Text>
      <Controller
        control={control}
        render={({field: { onChange, onBlur, value }}) => (
          <TextInput
            style={styles.input}
            onBlur={onBlur}
            onChangeText={value => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{ required: true }}
      />

      <View style={styles.button}>
        <Button
          title="Reset"
          onPress={() => {
            reset({
              email: 'jane@example.com',
              password: '****'
            })
          }}
        />
      </View>

      <View style={styles.button}>
        <Button
          title="Button"
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: 'white',
    margin: 20,
    marginLeft: 0,
  },
  button: {
    marginTop: 40,
    color: 'white',
    height: 40,
    backgroundColor: '#ec5990',
    borderRadius: 4,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 5,
    padding: 8,
    backgroundColor: '#0e101c',
  },
  input: {
    backgroundColor: 'white',
    borderColor: 'none',
    height: 40,
    padding: 10,
    borderRadius: 4,
  },
});