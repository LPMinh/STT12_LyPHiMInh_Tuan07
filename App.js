
import { NavigationContainer } from '@react-navigation/native';

import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';
import { TouchableOpacity,Image,Text } from 'react-native';
import home from './home';
import screen1 from './screen1';
import screen2 from './screen2';
import screen3 from './screen3';
export default function App() {
  const Stack = new createStackNavigator();
  return (
  
   <NavigationContainer>
      <Stack.Navigator  screenOptions={
        ({navigation,route})=>(
          {
            headerLeft:()=>(<TouchableOpacity onPress={()=>navigation.goBack()}><Image source={require('./assets/right.png')} style={{height:30,width:30}}></Image></TouchableOpacity>),
            headerRight:()=>(<TouchableOpacity onPress={()=>navigation.navigate('screen1')}><Image source={require('./assets/look.png')} style={{height:30,width:30}}></Image></TouchableOpacity>),
            headerTitleStyle:{fontSize:20,fontWeight:'bold'},
            headerStyle:{borderBottomWidth:0},
          }
        )
      } >
        <Stack.Screen  name="home" component={home} options={
           ({navigation,route})=>(
            {
              headerLeft:null,
              headerRigh:null,
              headerShown:false
            }
          )
        }/>
        <Stack.Screen name="screen1" component={screen1} 
        options={
          ({navigation,route})=>(
           {
            
           title:"Shops near me"
           }
         )
       }
        />
          <Stack.Screen name="screen2" component={screen2} 
        options={
          ({navigation,route})=>(
           {
            
           title:"Drinks"
           }
         )
       }
        />
          <Stack.Screen name="screen3" component={screen3} 
        options={
          ({navigation,route})=>(
           {
            
           title:"Cart"
           }
         )
       }
        />
      </Stack.Navigator>
   </NavigationContainer>
  );
}



