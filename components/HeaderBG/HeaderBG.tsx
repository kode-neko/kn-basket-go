import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { ThemeBG } from '../../model';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { themeColorHeader, themeColorReverse, themesBG } from '../../themes';
import { NativeStackHeaderProps } from '@react-navigation/native-stack';
import { FontAwesome5 } from '@expo/vector-icons';
import { useTranslation } from 'react-i18next';

const themeStyle = (theme: ThemeBG) => StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    padding: themesBG[theme].sizes.base,
    paddingBottom: 0,
  },
  left: {},
  right: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: themesBG.global.sizes.small,
    backgroundColor: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.dark : themesBG[theme].colorsBG.light,
    color: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    fontFamily: themesBG.global.font.basefont,
    fontSize: themesBG.global.sizes.base,
    flex: 1,
    textAlign: 'right'
  }
});

const titleIcon = {
  home: 'home',
  dish: 'utensils',
  product: 'carrot',
  ingredient: 'carrot',
  shop: 'warehouse',
  history: 'list-ul'
};

const HeaderBG: React.FC<NativeStackHeaderProps> = ({ back, navigation, route: { name } }: NativeStackHeaderProps) => {
  const { t } = useTranslation();
  const theme = useSelector((state: StoreType) => state.app.theme);
  const handleBack = () => navigation.goBack();
  console.log(back);
  return (
    <View style={themeStyle(theme).cont}>
      { back && <TouchableOpacity style={themeStyle(theme).left} onPress={handleBack}>
        <FontAwesome5
          name='arrow-left'
          size={24}
          color={themeColorHeader(theme)}
        />
      </TouchableOpacity>}
      <View style={themeStyle(theme).right}>
        <FontAwesome5
          name={titleIcon[name]}
          size={24}
          color={themeColorHeader(theme)}
        />
        {t(`titles.${name}`)}
      </View>
    </View>
  );
};

export default HeaderBG;