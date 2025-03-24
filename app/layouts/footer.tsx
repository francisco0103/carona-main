import { View, Text, StyleSheet } from 'react-native';
import React from 'react';

const Footer = () => {
  return (
    <View style={styles.container}>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#000', // Cor de fundo preta
    height: 86, // Altura do rodapé
    padding: 1, // Espaçamento interno
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    borderTopWidth: 10, // Borda superior
    borderTopColor: '#fff', // Cor da borda
    position: 'absolute', // Fixa o rodapé na parte inferior
    bottom: 0, // Posiciona o rodapé na parte inferior
    left: 0, // Alinha à esquerda
    right: 0, // Alinha à direita
  },

});

export default Footer;