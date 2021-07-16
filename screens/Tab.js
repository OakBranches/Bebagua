import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home';
import Welcome from './Welcome';
import { Entypo, Feather } from '@expo/vector-icons'
import Config from './Config';
import { BottomNavigation, Text } from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { useTheme, Portal, FAB } from 'react-native-paper';

export default function Tab(props) {
  const paperTheme = useTheme();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home' },
    { key: 'config', title: 'Config', icon: 'cog' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: Home,
    config: Config,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
    />
  );
}

