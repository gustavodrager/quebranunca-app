// src/screens/LoginScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().required('Campo obrigatório'),
});

export const LoginScreen = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<any>();

  const onSubmit = async (data: any) => {
    try {
      const response = await axios.post('https://sua-api.com/api/auth/login', {
        email: data.email,
        password: data.password,
      });

      // Exemplo: salvar token em storage e navegar
      const token = response.data.token;
      console.log('TOKEN:', token);

      Alert.alert('Login realizado!');
      navigation.navigate('Home');

    } catch (error: any) {
      Alert.alert('Erro no login', error?.response?.data?.message || 'Verifique suas credenciais');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            style={styles.input}
            autoCapitalize="none"
          />
        )}
      />
      {errors.email && <Text style={styles.error}>{errors.email.message}</Text>}

      <Controller
        control={control}
        name="password"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Senha"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />
      {errors.password && <Text style={styles.error}>{errors.password.message}</Text>}

      <Button title="Entrar" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />

      <TouchableOpacity onPress={() => navigation.navigate('Register')}>
        <Text style={styles.link}>Não tem conta? Cadastre-se</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', padding: 20, backgroundColor: '#000' },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center', color: '#FFD700' },
  input: {
    borderWidth: 1, borderColor: '#ccc', backgroundColor: '#fff',
    padding: 10, borderRadius: 8, marginBottom: 10,
  },
  error: { color: 'red', marginBottom: 10 },
  link: { color: '#FFD700', textAlign: 'center', marginTop: 20 },
});