// src/components/Driver.tsx
import { MaterialIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { Link, useRouter } from 'expo-router';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { DriverData, saveDriverData } from './driverData'; // Importa a função de salvar dados

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

  const router = useRouter();

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
      router.push("/auth/NextPage"); // Navega para a próxima página
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível salvar os dados.');
    }
  };

  return (
    <>
      <View style={{ backgroundColor: '#000', width: '100%', height: 60, flexDirection: 'row', justifyContent: 'flex-start', alignItems: 'center' }}>
        <TouchableOpacity onPress={() => router.back()}>
          <MaterialIcons name='arrow-back' color='#fff' size={32} />
        </TouchableOpacity>
        <Text style={{ color: '#fff', fontSize: 18, marginLeft: 18 }}>Cadastro de Motorista</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.title}>Vamos precisar de algumas informações para realizar o seu cadastro!</Text>
        <View style={styles.userInfo}>
          <Text style={{ fontSize: 18, paddingVertical: 8, fontWeight: '700' }}>Dados pessoais</Text>
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
        </View>

        <View style={styles.userInfo}>
          <Text style={{ fontSize: 18, paddingVertical: 8, fontWeight: '700' }}>
            Dados do Veículo
          </Text>
          <View style={styles.carInputContainer}>
            <TextInput
              style={styles.carInput}
              placeholder="Marca do Carro"
              placeholderTextColor="#000000"
              value={carBrand}
              onChangeText={setCarBrand}
            />
            <TextInput
              style={styles.carInput}
              placeholder="Modelo do Carro"
              placeholderTextColor="#000000"
              value={carModel}
              onChangeText={setCarModel}
            />
          </View>
          <View style={styles.carInputContainer}>
            <TextInput
              style={styles.carInput}
              placeholder="Ano do Carro"
              placeholderTextColor="#000000"
              value={carYear}
              onChangeText={setCarYear}
            />
            <TextInput
              style={styles.carInput}
              placeholder="Placa do Carro"
              placeholderTextColor="#000000"
              value={carPlate}
              onChangeText={setCarPlate}
            />
          </View>
        </View>
        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Link href={"./NextPage"}><Text style={styles.buttonText}>Cadastrar</Text></Link>
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: '5%', // Ajuste para 5% em vez de 20
    flex: 1,
    backgroundColor: '#fff',
    width: '100%',
    alignItems: 'center',
    alignSelf: 'center',
    
  },
  title: {
    paddingVertical: 1,
    fontSize: 24, // Reduzido para melhor responsividade
    fontWeight: '500',
    textAlign: 'left',
  },
  userInfo: {
    width: '100%', // Ajustado para 100% para melhor responsividade
    maxWidth: 400, // Limite máximo para telas grandes
  },
  input: {
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    width: '100%',
    borderRadius: 5,
  },
  button: {
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#000',
    padding: 15,
    borderRadius: 5,
    alignItems: 'center',
    width: '90%', // Ajustado para 90% para melhor responsividade
    alignSelf: 'center', // Centraliza o botão
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto do botão
  },
  carInputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
  carInput: {
    height: 50,
    borderColor: '#000000',
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
    flex: 1, // Faz com que o input ocupe o espaço disponível
    marginRight: 10, // Adiciona espaço entre os inputs
  },
  carInputLast: {
    marginRight: 0, // Remove a margem direita do último input
  },
});

export default Driver;