import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

const Passenger = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    // Aqui você pode adicionar a lógica para enviar os dados para o servidor
    Alert.alert('Cadastro realizado!', `Nome: ${name}\nE-mail: ${email}\nTelefone: ${phone}`);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' color={'#fff'} size={30} />
        <Text style={styles.headerText}>Cadastro de Passageiro</Text>
      </View>
      <Text style={styles.subHeaderText}>Vamos Realizar Seu Cadastro</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome"
        placeholderTextColor="#000000"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        placeholderTextColor="#000000"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Telefone"
        placeholderTextColor="#000000"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#000000"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />

      <TouchableOpacity style={styles.button} onPress={handleRegister}>
        <Text style={styles.buttonText}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
    borderWidth: 1,
    borderRadius: 20,
    width: 500,
    alignItems:'center',
    alignSelf: 'center',
    position: 'relative'
  },
  header: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#000',
    height: 86,
    paddingHorizontal: 15,
    borderRadius: 20,
  },
  headerText: {
    textAlign: 'center',
    padding: 30,
    color: '#fff',
    fontSize: 22,
    marginLeft: 10,
  },
  subHeaderText: {
    textAlign: 'center',
    marginVertical: 20,
    fontSize: 18,
  },
  input: {
    height: 50,
    borderColor: '#fffff',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 15,
    width: 300,
  },
  button: {
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
    width: 300,
    alignSelf: 'center'
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default Passenger;