import { Link } from 'expo-router'
import React from 'react'
import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
const index = () => {
  return (
    <View style={styles.View}>
      <StatusBar barStyle={'light-content'} />
      <Text style={styles.Text} >Como você quer usar o app?</Text>
      <Link href={"/auth/driver"}>
        <Image style={styles.Image} source={require('../assets/driver.png')} />
      </Link>
      <Text style={{ fontSize: 28, fontWeight: 600 }}>Motorista</Text>
      <Text style={{ fontSize: 20, marginBottom: 60 }} >Ofereça carona e ganhe dinheiro</Text>


      <Link href={"/auth/passager"}>
        <Image style={styles.Image} source={require('../assets/Passager.png')} />
      </Link>
      <Text style={{ fontSize: 28, fontWeight: 600 }}>Carona</Text>
      <Text style={{ fontSize: 20, marginBottom: 60 }}>Encontre Caronas e Economize</Text>


    </View>
  )
}
const styles = StyleSheet.create({

  Text: {
    position: 'relative', fontSize: 34,
    fontWeight: 500,
    paddingHorizontal: 50,
    marginBottom: 60
  },
  Image: {
    width: 120, height: 120,
    alignSelf: 'center'
    , justifyContent: 'center'
  },
  View: {
    flex: 1, alignItems: 'center',
    justifyContent: 'center',
    display: 'flex',
    backgroundColor: '#FFF'
  },
  h1: {
    fontSize: 32, fontWeight: 'bold',
  },

})


export default index