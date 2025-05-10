// src/screens/RegisterScreen.tsx
import React from 'react';
import { View, Text, TextInput, Button, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { useForm, Controller } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const schema = Yup.object().shape({
  email: Yup.string().email('Email inválido').required('Campo obrigatório'),
  password: Yup.string().min(6, 'Mínimo 6 caracteres').required('Campo obrigatório'),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref('password')], 'As senhas não conferem')
    .required('Campo obrigatório'),
});

export const RegisterScreen = () => {
  const { control, handleSubmit, formState: { errors, isSubmitting } } = useForm({
    resolver: yupResolver(schema),
  });

  const navigation = useNavigation<any>();

  const onSubmit = async (data: any) => {
    try {
      const payload = {
        email: data.email,
        password: data.password,
      };

      await axios.post('https://sua-api.com/api/usuarios', payload);
      Alert.alert('Cadastro realizado com sucesso!');
      navigation.navigate('Login');
    } catch (error: any) {
      Alert.alert('Erro ao cadastrar', error?.response?.data?.message || 'Erro desconhecido');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>

      <Controller
        control={control}
        name="email"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Email"
            value={value}
            onChangeText={onChange}
            style={styles.input}
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

      <Controller
        control={control}
        name="confirmPassword"
        render={({ field: { onChange, value } }) => (
          <TextInput
            placeholder="Confirmar Senha"
            secureTextEntry
            value={value}
            onChangeText={onChange}
            style={styles.input}
          />
        )}
      />
      {errors.confirmPassword && <Text style={styles.error}>{errors.confirmPassword.message}</Text>}

      <Button title="Cadastrar" onPress={handleSubmit(onSubmit)} disabled={isSubmitting} />

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Já tem conta? Entrar</Text>
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
