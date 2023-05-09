import { View, StyleSheet } from 'react-native';
import { ThemeBG } from '../../model';
import { StoreType } from '../../store';
import { useSelector } from 'react-redux';
import { themesBG } from '../../themes';

const themeStyle = (theme: ThemeBG) => StyleSheet.create({
  cont: {
    padding: themesBG[theme].sizes.base,
    flex: 1
  }
});

const ViewBG: React.FC = ({ children, ...props }: React.PropsWithChildren) => {
  const theme = useSelector((state: StoreType) => state.app.theme);
  return (
    <View style={themeStyle(theme).cont} {...props}>
      {children}
    </View>
  );
};

export default ViewBG;