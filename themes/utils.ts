import { themesBG } from ".";
import { ThemeBG } from "../model";

const themeColorDirect = (theme: ThemeBG) => 
  theme === ThemeBG.CONTRAST ? 
    themesBG[theme].colorsBG.light : 
    themesBG[theme].colorsBG.dark;

const themeColorReverse = (theme: ThemeBG) => 
  theme === ThemeBG.CONTRAST ? 
    themesBG[theme].colorsBG.light : 
    themesBG[theme].colorsBG.dark;

const themeColorHeader = (theme: ThemeBG) => 
  theme === ThemeBG.CONTRAST ? 
    themesBG[theme].colorsBG.green : 
    themesBG[theme].colorsBG.dark;

export {
  themeColorDirect,
  themeColorReverse,
  themeColorHeader
};