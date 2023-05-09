
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import { themesBG } from './themes';
import { useSelector } from 'react-redux';
import { StoreType } from './store';

// Create Main bar
const Stack = createNativeStackNavigator();

const Header = (props) => {
  console.log(props);
  return (
    <div>Patata</div>
  );
};

export default function Container() {
  const theme = useSelector((state: StoreType) => state.app.theme);
  return (
    <NavigationContainer theme={themesBG[theme]} >
      <Stack.Navigator
        screenOptions={{
          headerShadowVisible: false,
          // header: Header
      }}>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
