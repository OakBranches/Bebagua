import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Welcome from './Welcome';
import {Entypo, Feather} from '@expo/vector-icons'
import Config from './Config';
import { BottomNavigation, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

const BottomTab = createMaterialBottomTabNavigator();

export default function Tab(props) {
    // return (
    //     <BottomTab.Navigator>
    //         <BottomTab.Screen 
    //             name="Home" 
    //             component={Home}
    //             options={
    //                 {
    //                     tabBarIcon: ({size, color}) => (<Entypo name='home' size={20} color={color} />)
    //                 }
    //             }
    //         />
    //         <BottomTab.Screen 
    //             name="Configurações" 
    //             component={Config} 
    //             options={
    //                 {
    //                     tabBarIcon: ({size, color}) => (<Feather name='settings' size={20} color={color} />)
    //                 }
    //             } />
    //     </BottomTab.Navigator>
    // );
    return (
        <BottomNavigation
          navigationState={{ index, routes }}
          onIndexChange={setIndex}
          renderScene={renderScene}
        />
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