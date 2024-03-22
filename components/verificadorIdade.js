import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const VerificadorIdade = () => {
  const [idade, setIdade] = useState('');
  const [mensagem, setMensagem] = useState('');

  const verificarIdade = () => {
    const idadeInt = parseInt(idade);

    if (isNaN(idadeInt)) {
      setMensagem('Por favor, digite uma idade válida.');
    } else if (idadeInt >= 18) {
      setMensagem('Você é maior de idade.');
    } else {
      setMensagem('Você é menor de idade.');
    }
  };

  return (
    <View style={styles.container}>
      <Text>Digite sua idade:</Text>
      <TextInput
        style={styles.input}
        keyboardType="numeric"
        onChangeText={(text) => setIdade(text)}
        value={idade}
      />
      <Button title="Verificar" onPress={verificarIdade} />
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

export default VerificadorIdade;
