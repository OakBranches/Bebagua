import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Tab from './screens/Tab';
import {
  NavigationContainer,
  DefaultTheme as NavigationDefaultTheme,
  DarkTheme as NavigationDarkTheme,
} from '@react-navigation/native';

import {
  DarkTheme as PaperDarkTheme,
  DefaultTheme as PaperDefaultTheme,
  Provider as PaperProvider,
} from 'react-native-paper';

const CombinedDefaultTheme = {
  ...PaperDefaultTheme,
  ...NavigationDefaultTheme,
  colors: {
    ...NavigationDefaultTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};
const CombinedDarkTheme = { 
  ...PaperDarkTheme, 
  ...NavigationDarkTheme,
  colors: {
    ...NavigationDarkTheme.colors,
    primary: 'rgb(255, 45, 85)',
  },
};

export default function App() {
  const [isDarkTheme, setIsDarkTheme] = React.useState(true);

  const theme = isDarkTheme? CombinedDarkTheme: CombinedDefaultTheme;
  console.log(theme);
  return (
  <PaperProvider theme={theme}> 
    <NavigationContainer theme={theme}>
      <Tab/>
    </NavigationContainer>
  </PaperProvider>   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
