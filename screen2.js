import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, Image, TouchableOpacity, ScrollView } from 'react-native';

export default function screen2({ navigation, route }) {
  const id = route.params.id;

  const [data, setData] = useState([]);
  const [dataSelect, setDataSelect] = useState([]);

  // Hàm xử lý khi người dùng click "plus" để thêm item vào dataSelect
  const addItemToDataSelect = (itemId) => {
    // Kiểm tra xem itemId đã tồn tại trong mảng dataSelect hay chưa
    if (!dataSelect.includes(itemId)) {
      // Nếu chưa tồn tại, thêm itemId vào mảng dataSelect
      const newDataSelect = [...dataSelect, itemId];
      // Cập nhật mảng dataSelect
      setDataSelect(newDataSelect);
    }
  };

  // Hàm xử lý khi người dùng click "minus" để loại bỏ item khỏi dataSelect
  const removeItemFromDataSelect = (itemId) => {
    // Lọc bỏ itemId khỏi mảng dataSelect
    const newDataSelect = dataSelect.filter((item) => item !== itemId);
    // Cập nhật mảng dataSelect
    setDataSelect(newDataSelect);
  };

  useEffect(() => {
    fetch("https://653f4a689e8bd3be29e02cbc.mockapi.io/item")
      .then(response => response.json())
      .then(data => {
        setData(data.filter((item) => item.shopID == id));
      });
  }, [id]);

  return (
    <View style={styles.container}>
      <ScrollView style={{ width: '100%', height: '60%' }}>
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
          style={{ width: '100%' }}
          keyExtractor={(item) => item.id.toString()} // Sử dụng keyExtractor để đảm bảo mỗi item có một key duy nhất
        />
      </ScrollView>
      <TouchableOpacity style={{ width: '80%', height: '10%', backgroundColor: '#EFB034', alignItems: 'center', justifyContent: 'center' }} onPress={() => { navigation.navigate('screen3', { 'data': dataSelect }) }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: 'white' }}>GO TO CART</Text>
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
