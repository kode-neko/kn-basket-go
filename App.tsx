import { useFonts } from 'expo-font';
import { useEffect, useState } from 'react';
import * as SplashScreen from 'expo-splash-screen';41;
import { store } from './store';
import { Provider } from 'react-redux';
import Container from './Container';
import './i18n';
import { useTranslation } from 'react-i18next';

// Splash screen visible
SplashScreen.preventAutoHideAsync();

export default function App() {
  const { t, i18n } = useTranslation();
  const [ fontsLoaded ] = useFonts({
    'roboto': require('./assets/fonts/roboto.ttf'),
    'ruso-one': require('./assets/fonts/russo-one.ttf')
  });
  const splashScreenLoading = async () => await SplashScreen.hideAsync();

  useEffect(() => {
    if(fontsLoaded) {
      splashScreenLoading();
      i18n.changeLanguage('es');
    }
  }, [ fontsLoaded ]);
  
  return (
    <Provider store={store}>
      <Container />
    </Provider>
  );
}
