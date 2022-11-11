import React, {useState} from "react";
	
import {View, TextInput, Button, StyleSheet, Modal, TouchableOpacity, Text} from 'react-native'

const RacunUnos = (props) => {
    const [tekst, postaviTekst] = useState('');
    const [iznos, postaviIznos] = useState('');

    const noviTekst = (tekst) => {
        postaviTekst(tekst);
      };    
    
    const noviIznos = (iznos) => {
        postaviIznos(iznos);
      };
    
    const noviRacun = () => {
        props.postaviRacun(tekst, iznos);
        postaviTekst('');
        postaviIznos('');
    }
    
 
    return (
        <Modal visible={props.vidljiv} animationType="slide">      
        <View
        style={stilovi.viewUnos}>
        <TextInput
          placeholder="Dodaj racun"
          style={stilovi.unos}
          value={tekst}
          onChangeText = {noviTekst}
        />        
        <TextInput
          placeholder="Dodaj iznos"
          style={stilovi.unos}
          value={iznos}
          onChangeText = {noviIznos}
        />

        <TouchableOpacity style={stilovi.botunUnos} onPress={noviRacun}>
          <Text style={stilovi.botunText}>Dodaj</Text>
        </TouchableOpacity>

        <TouchableOpacity style={stilovi.botunOdustani} onPress={props.odustani}>
          <Text style={stilovi.botunText}>Odustani </Text>
        </TouchableOpacity>

      </View>
      </Modal>

    )
  }
  const stilovi = StyleSheet.create({
    viewUnos: {
    flexDirection: 'column',
    flex: 1,
    marginBottom: 2,
    justifyContent: 'center',
    alignItems: 'center',
    },

    unos: {
    width: '70%',
    marginBottom: 5,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
    },
    botun: {
    margin: 20,
    },

    botunUnos: {
        width: '50%',
        padding: 10,
        marginTop: 20,
        backgroundColor: 'blue',
        borderRadius: 30,           
    },

    botunOdustani: {
        width: '50%',
        padding: 10,
        marginTop: 10,
        backgroundColor: "red",
        borderRadius: 30,
      },
      botunText: {
        color: "white",
        fontSize: 20,
        justifyContent: "center",
        textAlign: "center",
      },
    });
   
  export default RacunUnos