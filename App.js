import { StatusBar } from 'expo-status-bar';
import React, {useState} from 'react';
import { StyleSheet, Text, View, Button,FlatList } from 'react-native';
import RacunPrikaz from './components/RacunPrikaz';
import RacunUnos from './components/RacunUnos';
import IzracunPrikaz from './components/IzracunPrikaz';

export default function App() {
  const [racuni, postaviRacun]=useState([]);
  const [unosVidljiv, postaviVidljivost]=useState(false);

  const noviRacun=(opis,cijena)=>{
    const noviObjekt={
      tekst:opis,
      iznos:cijena,
      key:Math.random().toString()
    };
    postaviRacun((ciljevi)=>[...ciljevi,noviObjekt]);
    postaviVidljivost(false);
  };

  const brisiRacun=(ciljID)=>{
    postaviRacun(racuni=>{
      return racuni.filter(c=>c.key!==ciljID);
    })
  }
  const ugasiModal =()=>(postaviVidljivost(false))

  return (
    <View style={stilovi.desktop}>
      <RacunUnos postaviRacun={noviRacun} vidljiv={unosVidljiv} odustani={ugasiModal}/>
      <Button title="Novi racun" onPress={()=> postaviVidljivost(true)}/>
      <FlatList 
      data={racuni} 
      renderItem={(el)=> <RacunPrikaz naslov={el.item.tekst} iznos={el.item.iznos} brisanje={brisiRacun} id={el.item.key}/>}
      />
      <IzracunPrikaz racuni={racuni}/>
    </View>
  );
}

const stilovi = StyleSheet.create({
  desktop: {
  padding:50,
  },
  unos:{
  width:'70%',
  marginBottom:5,
  borderBottomColor:'black',
  borderBottomWidth:1,
  },
  lista:{
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1   
  },
});