import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from './styles';

export default function ButtonLarge({onPress, texto}) {
  return (
    <TouchableOpacity style={styles.botao} onPress={onPress}>
      <Text style={styles.textoBotao}>{texto}</Text>
    </TouchableOpacity>
  );
}