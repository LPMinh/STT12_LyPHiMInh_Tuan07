import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity } from 'react-native';

export default function screen1({navigation,route}) {
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
      <FlatList
        data={data}
        renderItem={({ item }) => (
           <TouchableOpacity style={{width:'90%',height:'200px',alignSelf:'center',justifyContent:'center',alignItems:'center'}} onPress={()=>navigation.navigate('screen2',{'id':item.id})}  >
             <Image style={{ width: '100%', height: '50%' }} source={{ uri: item.image }}></Image>
             <View style={{flexDirection:'row',width:'100%',height:40,alignItems:'center',justifyContent:'center'}}>
                
                <View style={{width:'50%'}}>
                    <Text>{item.status}</Text>
                </View>
                <View style={{width:'50%',height:'100%',flexDirection:'row',justifyContent:'flex-start',alignItems:'center'}}>
                    <Image source={require('./assets/clock.png')} style={{width:'20px',height:'20px'}}></Image>
                    <Text style={{width:'40%',height:'20px'}}>{item.time}</Text>
                    <Image source={require('./assets/location.png')} style={{width:'20px',height:'20px'}}></Image>
                </View>
              
               
             </View>
             <Text style={{width:'100%',fontWeight:'bold',height:'50'}}>{item.name}</Text>
             <Text style={{width:'100%',fontWeight:'200',height:'50'}}>{item.address}</Text>
           </TouchableOpacity>
         
        )}
        style={{width:'100%'}}
        key={data.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
