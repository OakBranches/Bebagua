import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { Provider as PaperProvider } from 'react-native-paper';
import {CombinedDarkTheme, CombinedDefaultTheme} from './theme/theme';
import Tab from './screens/Tab';

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const theme = CombinedDarkTheme;

  return (
  <PaperProvider theme = {theme}> 
    <NavigationContainer theme = {theme}>

      <Tab/>
    </NavigationContainer>
  </PaperProvider>   
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
