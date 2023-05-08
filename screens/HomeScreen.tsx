import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { BGView, BGText } from '../components';
import { useDispatch } from 'react-redux';
import { StoreType, actionsApp } from '../store';
import { ThemeBG } from '../model';

const HomeScreen = () => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  const dispatch = useDispatch();
  
  const handlePressBtnTheme = () => {
    dispatch(actionsApp.changeTheme(theme === ThemeBG.CONTRAST ? ThemeBG.LIGHT : ThemeBG.CONTRAST));
  };

  return (
    <BGView>
      <BGText>Home Screen</BGText>
      <Button onPress={handlePressBtnTheme} title="change Theme" />
    </BGView>
  );
};

export default HomeScreen;