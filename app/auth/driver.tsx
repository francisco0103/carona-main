// src/components/Driver.tsx
import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { saveDriverData, DriverData } from './driverData'; // Importa a função de salvar dados
import { useNavigation } from '@react-navigation/native';
import {Link} from 'expo-router'

const Driver: React.FC = () => {
  const navigation = useNavigation();
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [carBrand, setCarBrand] = useState<string>('');
  const [carModel, setCarModel] = useState<string>('');
  const [carYear, setCarYear] = useState<string>('');
  const [carPlate, setCarPlate] = useState<string>('');

  const handleRegister = async () => {
    const driverData: DriverData = {
      name,
      email,
      phone,
      password,
      carBrand,
      carModel,
      carYear,
      carPlate,
    };

    try {
      await saveDriverData(driverData); // Salva os dados usando a função importada
      Alert.alert('Cadastro realizado!', 'Os dados do motorista foram salvos com sucesso!');
      navigation.navigate('NextPage'); // Navega para a próxima página
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <View style={styles.container}>
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
      <TextInput
        style={styles.input}
        placeholder="Marca do Carro"
        placeholderTextColor="#000000"
        value={carBrand}
        onChangeText={setCarBrand}
      />
      <TextInput
        style={styles.input}
        placeholder="Modelo do Carro"
        placeholderTextColor="#000000"
        value={carModel}
        onChangeText={setCarModel}
      />
      <TextInput
        style={styles.input}
        placeholder="Ano do Carro"
        placeholderTextColor="#000000"
        value={carYear}
        onChangeText={setCarYear}
      />
      <TextInput
        style={styles.input}
        placeholder="Placa do Carro"
        placeholderTextColor="#000000"
        value={carPlate}
        onChangeText={setCarPlate}
      />
      <TouchableOpacity style={styles.button} onPress={handleRegister}>
       <Link href={"./NextPage"}><Text style={styles.buttonText}>Cadastrar</Text></Link>
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
    alignItems: 'center',
    alignSelf: 'center',
    position: 'relative',
  },
  input: {
    height: 50,
    borderColor: '#000000',
    borderWidth : 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    backgroundColor: '#007BFF',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default Driver;