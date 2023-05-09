import { Text, StyleSheet } from 'react-native';
import { themesBG } from '../../themes';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { ThemeBG } from '../../model';

const themeStyle = (theme: ThemeBG) => StyleSheet.create({
  text: {
    fontSize: themesBG[theme].font.basesize,
    color: theme == ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    fontFamily: themesBG[theme].font.basefont
  }
});

const TextBG: React.FC = ({ children, ...props }: React.PropsWithChildren) => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  console.log(theme);
  return (
    <Text style={themeStyle(theme).text} {...props}>
      {children}
    </Text>
  );
};

export default TextBG;
