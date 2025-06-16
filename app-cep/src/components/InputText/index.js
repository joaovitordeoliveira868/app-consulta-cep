import React from 'react';
import { TextInput } from 'react-native';
import { styles } from './styles';

export default function InputText({ placeholder, value, onChangeText }) {
  return (
    <TextInput 
      placeholder={placeholder}
      value={value}
      maxLength={8}
      onChangeText={onChangeText} 
      style={styles.input}
      keyboardType="numeric"
    />
  );
}

