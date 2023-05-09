
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { themesBG } from './themes';
import { useSelector } from 'react-redux';
import { StoreType } from './store';
import { HeaderBG } from './components';
import { useTranslation } from 'react-i18next';

// Create Main bar
const Stack = createNativeStackNavigator();

export default function Container() {
  const theme = useSelector((state: StoreType) => state.app.theme);
  return (
    <NavigationContainer theme={themesBG[theme]} >
      <Stack.Navigator
        screenOptions={{ header: HeaderBG }}
      >
        <Stack.Screen name='home'  component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
