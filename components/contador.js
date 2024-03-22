import React, { useState } from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const Contador = () => {
  const [contador, setContador] = useState(0);

  const incrementarContador = () => {setContador(contador + 1);};

  return (
    <View style={styles.container}>
      <Text>Contador: {contador}</Text>
      <Button title="Clique aqui" onPress={incrementarContador} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
});

export default Contador;
