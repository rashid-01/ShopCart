import React from 'react';
import {configureFonts, DefaultTheme, Provider as PaperProvider } from 'react-native-paper';
import App from './src/App';

const fontConfig:any = {
  web: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'normal',
    },
  },
  ios: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'normal',
    },
  },
  android: {
    regular: {
      fontFamily: 'OpenSans-Regular',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'OpenSans-SemiBold',
      fontWeight: 'normal',
    },
    light: {
      fontFamily: 'OpenSans-Light',
      fontWeight: 'normal',
    },
    bold: {
      fontFamily: 'OpenSans-Bold',
      fontWeight: 'normal',
    },
  }
}

const theme = {
  ...DefaultTheme,
  fonts: configureFonts(fontConfig),
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App/>
    </PaperProvider>
  )
} 