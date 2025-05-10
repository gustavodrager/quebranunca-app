// src/screens/HomeScreen.tsx
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à Plataforma QNF! 🏐</Text>
      <Text style={styles.subtitle}>Você está logado.</Text>

      {/* Aqui futuramente: ranking, jogos pendentes, grupos, etc */}
      <Button title="Sair" onPress={() => {
        // Aqui você pode limpar o token e voltar pro login
        console.log('Logout');
      }} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#000', padding: 20 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#FFD700', marginBottom: 10, textAlign: 'center' },
  subtitle: { fontSize: 16, color: '#FFF', textAlign: 'center', marginBottom: 30 },
});