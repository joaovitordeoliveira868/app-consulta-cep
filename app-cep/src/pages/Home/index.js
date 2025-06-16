import React, { useState } from "react";
import { Text, View, Alert } from "react-native";
import { styles } from "./styles";

import ButtonLarge from "../../components/ButtonLarge";
import InputText from "../../components/InputText";

import api from "../../services/apiCEP";

export default function Home() {
  
  const [CEP, setCEP] = useState("");
  const [dados, setDados] = useState(null);
  const [erro, setErro] = useState("");
  async function BuscarCEP() {

    if (CEP.trim() === "") {

      setErro("O campo CEP não pode estar vazio");

      return;
    }

    setErro(""); 

    try {
      const response = await api.get(`${CEP}/json/`);

      if (response.data.erro) {

        setErro("CEP inválido");

        setDados(null);

        return;
      }

      setDados(response.data);
      setErro(""); 

    } catch (erro) {

      setErro("Erro ao buscar CEP");

      setDados(null);
    }
  }

  // Limpa mensagem de erro ao digitar
  function onChangeCEP(text) {
    setCEP(text);
    if (erro) setErro("");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Digite o seu CEP: </Text>

      <InputText
        placeholder={"Ex: 01001000"}
        value={CEP}
        onChangeText={onChangeCEP}
      />

      {/* Mensagem de erro visual */}
      {erro !== "" && (
        <Text style={styles.error}>{erro}</Text>
      )}

      <ButtonLarge texto={"Buscar CEP"} onPress={BuscarCEP} />

      {dados && (
        <View style={styles.resultado}>
          <Text style={styles.resultadoTexto}>Logradouro: {dados.logradouro}</Text>
          <Text style={styles.resultadoTexto}>Bairro: {dados.bairro}</Text>
          <Text style={styles.resultadoTexto}>Cidade: {dados.localidade}</Text>
          <Text style={styles.resultadoTexto}>Estado: {dados.uf}</Text>
        </View>
      )}
    </View>
  );
}
