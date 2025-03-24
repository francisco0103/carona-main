// src/components/NextPage.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions } from 'react-native';
import { getDriverData } from './driverData'; // Importa a função de recuperar dados
import { Link } from 'expo-router';

const NextPage: React.FC = () => {
  const [driverData, setDriverData] = useState<any>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await getDriverData();
      setDriverData(data);
    };
    fetchData();
  }, []);

  return (
    <View style={styles.container}>
      {driverData ? (
        <>
          <Text style={styles.title}>Dados do Motorista</Text>
          <Text>Nome: {driverData.name}</Text>
          <Text>E-mail: {driverData.email}</Text>
          <Text>Telefone: {driverData.phone}</Text>
          <Text>Marca do Carro: {driverData.carBrand}</Text>
          <Text>Modelo do Carro: {driverData.carModel}</Text>
          <Text>Ano do Carro: {driverData.carYear}</Text>
          <Text>Placa do Carro: {driverData.carPlate}</Text>
        </>
      ) : (
        <Text>Carregando dados...</Text>
      )}
      <Link href={"/layouts/footer"}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#000', // Cor de fundo do botão
    paddingVertical: 15, // Padding vertical
    paddingHorizontal: 20, // Padding horizontal
    borderRadius: 5,
    alignItems: 'center',
    width: 200, // Ajustado para 90% para melhor responsividade
    alignSelf: 'center', // Centraliza o botão
    elevation: 3, // Sombra para Android
    shadowColor: '#000', // Sombra para iOS
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
    margin: 15,
    padding:15,
    height:70
  },
  buttonText: {
    color: '#FFFFFF', // Cor do texto do botão
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center', // Centraliza o texto do botão
  }
});

export default NextPage;