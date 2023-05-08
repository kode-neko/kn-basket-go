import { Button } from 'react-native';
import { useSelector } from 'react-redux';
import { BGView, BGText } from '../components';
import { useDispatch } from 'react-redux';
import { StoreType, actionsApp } from '../store';
import { ThemeBG } from '../model';
import { useTranslation } from 'react-i18next';

const HomeScreen = () => {
  const { t, i18n } = useTranslation();
  const { theme, lang } = useSelector((state: StoreType) => state.app);
  const dispatch = useDispatch();
  
  const handlePressBtnTheme = () => {
    dispatch(actionsApp.changeTheme(theme === ThemeBG.CONTRAST ? ThemeBG.LIGHT : ThemeBG.CONTRAST));
  };

  const handlePressBtnLang = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
  };

  return (
    <BGView>
      <BGText>Home Screen</BGText>
      <Button onPress={handlePressBtnTheme} title="change Theme" />
      <BGText>{t('test')}</BGText>
      <Button onPress={handlePressBtnLang} title="change Theme" />
    </BGView>
  );
};

export default HomeScreen;