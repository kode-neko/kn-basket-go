import { Text, StyleSheet } from 'react-native';
import { themesBG } from '../../themes';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { ThemeBG } from '../../model';

const themeStyle = (theme: ThemeBG) => StyleSheet.create({
  text: {
    fontSize: 42,
    color: theme == ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    fontFamily: themesBG[theme].font.titlefont,
    textAlign: 'center',
    marginBottom: themesBG.contrast.sizes.double
  }
});

const MainTitleBG: React.FC = ({ children, ...props }: React.PropsWithChildren) => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  return (
    <Text style={themeStyle(theme).text} {...props}>
      {children}
    </Text>
  );
};

export default MainTitleBG;
