import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { ThemeBG } from '../../model';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { themesBG } from '../../themes';
import { useState } from 'react';

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
    top: 1,
    left: 18
  }
});

type SwitchBGProps = {
  isRight: boolean,
  Icon: JSX.Element,
  onClickSW: (isRight: boolean) => void
}

const SwitchBG: React.FC<SwitchBGProps> = ({ isRight, Icon, onClickSW }: SwitchBGProps) => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  const [ isRightHere, setIsRightHere ] = useState(isRight);
  const style = themeStyle(theme);
  const right = isRightHere ? style.right : {};
  const positionBtn = { ...style.btn, ...right };
  const handleClick = () => {
    onClickSW(!isRightHere);
    setIsRightHere(!isRightHere);
  };

  return (
    <TouchableOpacity style={style.cont} onPress={handleClick}>
      <View style={style.icon}>{Icon}</View>
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