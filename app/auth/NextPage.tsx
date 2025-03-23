// src/components/NextPage.tsx
import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { getDriverData } from './driverData'; // Importa a função de recuperar dados

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
});

export default NextPage;