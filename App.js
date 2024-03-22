import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Contador from './components/contador.js';
import VerificadorNumero from './components/verificadorNumero.js';
import VerificadorIdade from './components/verificadorIdade.js';

export default function App() {
  return (
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Contador />
        <VerificadorNumero />
        <VerificadorIdade />
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
