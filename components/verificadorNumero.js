import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VerificadorNumero = () => {
  const [numero, setNumero] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarNumero = () => {
    const numeroInt = parseInt(numero);

    if (isNaN(numeroInt)) {
      setMensagem('Por favor, digite um número válido.');
    } else if (numeroInt > 0) {
      setMensagem('O número é positivo.');
    } else if (numeroInt < 0) {
      setMensagem('O número é negativo.');
    } else {
      setMensagem('O número é neutre.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Digite um número:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setNumero(text)}
        value={numero}
      />
      <Button title="Verificar" onPress={verificarNumero} />
      <Text style={styles.mensagem}>{mensagem}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  input: {
    width: '80%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  mensagem: {
    marginTop: 20,
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default VerificadorNumero;
