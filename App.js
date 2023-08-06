import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import Perfil from "./assets/imagem/perfil.png"
import Img from "./assets/imagem/montanha.jpg"

export default function App() {
  return (
    <View style={estilos.container}>
      <Image style={estilos.img} source={Img}/>
      <Image style={estilos.fotoPerfil} source={Perfil}/>
      <Text style={estilos.titulo}>Vinicius Soares Ramos</Text>
      <Text style={estilos.texto}>Desenvolvedor Front-End, se especializando nas tecnologias JavaScript, React Native, CSS, Html</Text>
    </View>
  )
}
const estilos = StyleSheet.create({
  container: {
flex:1,
backgroundColor: 'white',
alignItems:'center'
  },
  img: {
width:420,
height:350
  },
  fotoPerfil: {
width: 70,
height: 70,
borderRadius:30,
margin: 10
  },
  titulo: {
textAlign: 'center',
fontSize: 18,
  },
  texto: {
textAlign: 'center',
fontSize: 12,
padding:5
  },

})
