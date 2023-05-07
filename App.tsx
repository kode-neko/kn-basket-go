/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [ fontsLoaded ] = useFonts({
    'roboto': require('./assets/fonts/roboto.ttf'),
    'ruso-one': require('./assets/fonts/russo-one.ttf')
  });

  const onLayoutRootView = useCallback(async () => {
    if(fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [ fontsLoaded ]);

  if(!fontsLoaded) {
    return null;
  }

  return (
    <View style={styles.container} onLayout={onLayoutRootView}>
      <Text style={styles.header}>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Russo One'
  },
  header: {
    fontFamily: 'ruso-one',
  }
});
