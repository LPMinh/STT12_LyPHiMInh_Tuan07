import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity,ScrollView } from 'react-native';


export default function screen3({navigation,route}) {

  const dataSelect=route.params.data;
  
  const [data, setData] = useState([]);
  const [total,setTotal]=useState(0);
  

  useEffect(() => {
    fetch("https://653f4a689e8bd3be29e02cbc.mockapi.io/item")
      .then(response => response.json())
      .then(data => {

       setData(data.filter((item)=>dataSelect.includes(item.id)));
      
       
      });
  }, dataSelect);
    useEffect((
    )=>{ setTotal(data.reduce((total,item)=>total+item.price,0));},[data]);
    const removeItemFromDataSelect = (itemId) => {
        // Lọc bỏ itemId khỏi mảng dataSelect
        const newDataSelect = data.filter((item) => item.id !== itemId);
        // Cập nhật mảng dataSelect
        setData(newDataSelect);
      };

  return (
    <View style={styles.container}>
     <View style={{width:'100%',height:'50%'}}>
        <View style={{width:'100%',height:'50%',backgroundColor:'#00bdd6',flexDirection:'row'}}>
            <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text style={{fontSize:25,fontWeight:'bold',color:'white',width:'100%'}}>CAFE DELIVERY</Text>
                <Text style={{fontSize:20,fontWeight:'bold',color:'white',width:'100%'}}>Order #18</Text>
            </View>
            <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
                <Text  style={{color:'white',fontWeight:'bold'}}>$5</Text>
            </View>
        </View>
        <View style={{width:'100%',height:'50%',backgroundColor:'#8353E2',flexDirection:'row'}}>
        <View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
            <Text style={{width:'100%',color:'white',fontSize:25,fontWeight:'bold'}}>CAFE</Text>
            <Text style={{width:'100%',color:'white',fontWeight:'bold'}}>Order #18</Text>
       </View>
<View style={{width:'50%',height:'100%',justifyContent:'center',alignItems:'center'}}>
    <Text  style={{color:'white',fontWeight:'bold'}}>${total}</Text>
</View>
        </View> 
     </View>
     <ScrollView style={{width:'100%',height:'40%'}}>
        <FlatList
        data={data}
        renderItem={({ item }) => (
            <TouchableOpacity style={{ width: '90%', height: '100px', alignSelf: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 10, borderWidth: 1, borderColor: 'gray', flexDirection: 'row', marginBottom: 20 }}>
              <Image style={{ width: '20%', height: '100%' }} source={{ uri: item.image }} />
              <View style={{ width: '50%', height: '100%', alignItems: 'flex-start', justifyContent: 'space-between' }}>
                <Text>{item.name}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start' }}>
                  {dataSelect.includes(item.id) && <Image source={require('./assets/Frame.png')} style={{ width: 10, height: 10 }} />}
                  <Text>{item.price}</Text>
                </View>
              </View>
              <View style={{ flexDirection: 'row', height: '100%', width: '20%', alignItems: 'center', justifyContent: 'space-between' }}>
                <TouchableOpacity onPress={() => addItemToDataSelect(item.id)}>
                  <Image source={require('./assets/plus.png')} style={{ width: 20, height: 20 }}></Image>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => removeItemFromDataSelect(item.id)}>
                  <Image source={require('./assets/minus.png')} style={{ width: 20, height: 20 }}></Image>
                </TouchableOpacity>
              </View>
            </TouchableOpacity>
        )}
        >

        </FlatList>
     </ScrollView>
    <TouchableOpacity style={{width:'100%',height:'10%',backgroundColor: '#EFB034', alignItems: 'center', justifyContent: 'center'}}>
    <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>PAY NOW</Text>
    </TouchableOpacity>
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
