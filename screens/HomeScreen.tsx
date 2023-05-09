import { StyleSheet, View } from 'react-native';
import { ViewBG, MainTitleBG, MainBtnBG, SwitchBG } from '../components';
import { useTranslation } from 'react-i18next'; 
import { FontAwesome5 } from '@expo/vector-icons';
import { ThemeBG } from '../model';
import { themeColorReverse, themesBG } from '../themes';
import { useState } from 'react';
import { StoreType, actionsApp } from '../store';
import { useDispatch, useSelector } from 'react-redux';

const style = StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'column',
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
    <ViewBG>
      <MainTitleBG>{t('titles.page')}</MainTitleBG>
      <View style={style.cont}>
        <MainBtnBG 
          color='green' 
          onPress={handlePressBtn} 
          label={t('section.createList')} 
          Icon={<FontAwesome5 name="shopping-basket" size={42} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <MainBtnBG 
          color='pink' 
          onPress={handlePressBtn} 
          label={t('section.createListMeals')} 
          Icon={<FontAwesome5 name="book-open" size={42} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <MainBtnBG 
          color='blue' 
          onPress={handlePressBtn} 
          label={t('section.meals')} 
          Icon={<FontAwesome5 name="utensils" size={42} color={themesBG[theme].colorsBG.dark}/>} 
        />
        <MainBtnBG
          color='yellow' 
          onPress={handlePressBtn} 
          label={t('section.listHistory')} 
          Icon={<FontAwesome5 name="list-ul" size={42} color={themesBG[theme].colorsBG.dark}/>} 
        />
      </View>
      <View style={style.opts}>
        <SwitchBG theme={theme} isRight={isAudio} Icon={<FontAwesome5 name="volume-down" size={24} color={themeColorReverse(theme)} />} onClickSW={handleClickAudio} />
        <SwitchBG theme={theme} isRight={isContrast} Icon={<FontAwesome5 name="paint-roller" size={24} color={themeColorReverse(theme)} />} onClickSW={handleClickTheme} />
      </View>
    </ViewBG>
  );
};

export default HomeScreen;