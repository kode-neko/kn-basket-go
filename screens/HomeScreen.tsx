import { StyleSheet, View } from 'react-native';
import { BGView, BGMainTitle, BGMainBtn, SwitchBG } from '../components';
import { useTranslation } from 'react-i18next'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeBG } from '../model';
import { themesBG } from '../themes';
import { useState } from 'react';
import { StoreType, actionsApp } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const style = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: themesBG.contrast.sizes.base
  },
  opts: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    alignItems: 'flex-end'
  }
});

const themeIcon = (theme: ThemeBG) => theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark;

const HomeScreen = () => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  const { t } = useTranslation();
  const [ isAudio, setIsAudio ] = useState(true);
  const [ isContrast, setIsContrast ] = useState(true);
  const dispacth = useDispatch();

  const handlePressBtn = () => {
    console.log('pressed');
  };
  const handleClickAudio = (isAudioSel: boolean) => {
    setIsAudio(isAudioSel);
  };
  const handleClickTheme = (isContrastSelected: boolean) => {
    const theme = isContrastSelected ? ThemeBG.CONTRAST : ThemeBG.LIGHT;
    dispacth(actionsApp.changeTheme(theme));
    setIsContrast(isContrastSelected);
  };

  return (
    <BGView>
      <BGMainTitle>{t('titles.page')}</BGMainTitle>
      <View style={style.cont}>
        <BGMainBtn 
          color='green' 
          onPress={handlePressBtn} 
          label={t('buy')} 
          Icon={<FontAwesome5 name="shopping-basket" size={64} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <BGMainBtn 
          color='pink' 
          onPress={handlePressBtn} 
          label={t('dishes')} 
          Icon={<FontAwesome5 name="utensils" size={64} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <BGMainBtn 
          color='yellow' 
          onPress={handlePressBtn} 
          label={t('history')} 
          Icon={<FontAwesome5 name="list-ul" size={64} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <BGMainBtn 
          color='blue' 
          onPress={handlePressBtn} 
          label={t('config')} 
          Icon={<FontAwesome5 name="tools" size={64} color={themesBG[theme].colorsBG.dark}/>} 
        />
      </View>
      <View style={style.opts}>
        <SwitchBG theme={theme} isRight={isAudio} Icon={<FontAwesome5 name="volume-down" size={24} color={themeIcon(theme)} />} onClickSW={handleClickAudio} />
        <SwitchBG theme={theme} isRight={isContrast} Icon={<FontAwesome5 name="paint-roller" size={24} color={themeIcon(theme)} />} onClickSW={handleClickTheme} />
      </View>
    </BGView>
  );
};

export default HomeScreen;