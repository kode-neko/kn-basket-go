import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemeBG } from '../../model';
import { themesBG } from '../../themes';

const themeStyle = (theme: ThemeBG) => StyleSheet.create({
  cont: {
    display: 'flex',
    flexDirection: 'row',
    gap: themesBG.global.sizes.small,
    width: 96
  },
  icon: {
    color: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    fontSize: themesBG.global.sizes.base,
    width: themesBG.global.sizes.base,
  },
  back: {
    height: themesBG.global.sizes.base,
    width: 42,
    border: '2px solid white',
    borderColor: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    borderRadius: themesBG.global.sizes.base,
    backgroundColor: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    position: 'absolute'
  },
  btn: {
    height: 22,
    border: '2px solid white',
    borderColor: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.light : themesBG[theme].colorsBG.dark,
    width: 22,
    borderRadius: themesBG.global.sizes.base,
    backgroundColor: theme === ThemeBG.CONTRAST ? themesBG[theme].colorsBG.dark : themesBG[theme].colorsBG.light,
    position: 'absolute',
    top: 1,
    left: 4,
    boxSizing: 'border-box'
  },
  right: {
    left: 18
  }
});

type SwitchBGProps = {
  theme: ThemeBG,
  isRight: boolean,
  Icon: JSX.Element,
  onClickSW: (isRight: boolean) => void
}

const SwitchBG: React.FC<SwitchBGProps> = ({ theme, isRight, Icon, onClickSW }: SwitchBGProps) => {
  const style = themeStyle(theme);
  const right = isRight ? style.right : {};
  const positionBtn = { ...style.btn, ...right };
  const handleClick = () => onClickSW(!isRight);

  return (
    <TouchableOpacity style={style.cont} onPress={handleClick}>
      <View style={style.icon} onPointerDown={handleClick}>{Icon}</View>
      <View>
        <View style={{ position: 'relative' }}>
            <View style={style.back} />
            <View style={positionBtn} />    
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SwitchBG;