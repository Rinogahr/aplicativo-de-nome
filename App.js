import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet, Button} from 'react-native';

function App(){

  const [nome, setNome] = useState('');
  const [input, setInput] = useState('');

  // function pgNome(texto){
  //   if( texto.length >= 3){
  //     setNome('Bem vindo ' + texto + ' !');
  //   }else{
  //     stateNome('');
  //   }
  // }
  function entrar(){
    setNome(input);
  }

  return(
    <View style={myStyle.mView}>
      <TextInput
       style={myStyle.inpuTxt}
      placeholder="Digite seu nome aqui!"
      autoCorrect={true}
      onChangeText={ (texto)=> setInput(texto) }
      // onChangeText={ (text)=> pgNome(text) }
      />

      <Button title="Entrar" onPress={ entrar }/>
      <Text style={myStyle.nome}>
        {nome}
      </Text>
    </View>
  );
}

const myStyle = StyleSheet.create({
  mView:{
    backgroundColor: '#cecece',
    flex: 1,
  },
  inpuTxt:{
    borderRadius: 10,
    borderWidth: 1,
    margin: 10,
    padding: 10,    
    fontSize: 25,
    color: '#000000',
  },
  nome:{
    fontSize: 25,
    textAlign: 'center',
    paddingTop: 35,
  }
});


export default App;


