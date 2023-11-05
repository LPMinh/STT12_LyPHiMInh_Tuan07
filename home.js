import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function home({navigation,route}) {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://653f4a689e8bd3be29e02cbc.mockapi.io/shop")
      .then(response => response.json())
      .then(data => {
        setData(data);
      });
  }, []);

  return (
    <View style={styles.container}>
      <Text style={{fontWeight:'bold',alignSelf:'flex-start',textAlign:'left',fontSize:'30px'}}>Welcome</Text>
      <View style={{width:'80%',height:'70%',justifyContent:'space-between',alignItems:'center'}}>
          <Image source={require('./assets/banner3.png')} style={{width:'100%',height:'30%'}}></Image>
          <Image source={require('./assets/banner2.png')} style={{width:'100%',height:'30%'}}></Image>
          <Image source={require('./assets/banner1.png')} style={{width:'100%',height:'30%'}}></Image>
      </View>
      <TouchableOpacity style={{width:'80%',height:'8%',marginTop:'20',backgroundColor:'#00BDD6',alignItems:'center',justifyContent:'center'}} onPress={()=>navigation.navigate('screen1')}>
          <Text style={{fontSize:24,fontWeight:'100',color:'white',alignSelf:'center'}}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
});
