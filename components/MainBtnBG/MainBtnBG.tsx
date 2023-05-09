import { TouchableOpacity, Text, StyleSheet, ButtonProps } from 'react-native';
import { themesBG } from '../../themes';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { ThemeBG } from '../../model';

const themeStyle = (theme: ThemeBG, color: string) => StyleSheet.create({
  btn: {
    display: 'flex',
    backgroundColor: themesBG[theme].colorsBG[color],
    borderRadius: themesBG[theme].sizes.borderradius,
    justifyContent: 'space-between',
    padding: themesBG.global.sizes.small
  },
  icon: {
    height: 52,
    fontSize: 52,
    textAlign: 'center'
  },
  text: {
    fontSize: 20,
    color: themesBG[theme].colorsBG.dark,
    fontWeight: 'bold',
    fontFamily: themesBG[theme].font.basefont,
    textTransform: 'uppercase',
    textAlign: 'center'
  }
});

interface BGMainProps extends React.PropsWithChildren, ButtonProps {
  label: string;
  color: string;
  Icon: JSX.Element
}

const MainBtnBG: React.FC<BGMainProps> = ({ label, Icon, color = 'green' }: BGMainProps) => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  const style = themeStyle(theme, color);
  return (
    <TouchableOpacity style={style.btn}>
      <Text style={style.icon}>{Icon}</Text>
      <Text style={style.text}>{label}</Text>
    </TouchableOpacity>
  );
};

export default MainBtnBG;
