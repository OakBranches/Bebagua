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
  };
  const CombinedDarkTheme = { ...PaperDarkTheme, ...NavigationDarkTheme };
  