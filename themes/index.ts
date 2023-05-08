import { ThemeBG } from '../model';
import { default as contrastBase } from './contrast';
import { default as lighBase } from './light';

const global = {
  sizes: {
    // base: 12,
    // double: 24,
    // triple: 36,
    base: 24,
    double: 36,
    triple: 72,
  },
  font: {
    basesize: 24,
    basefont: 'roboto',
    titlefont: 'ruso-one'
  }
};

const contrastBG = { ...contrastBase, ...global };
const lightBG = { ...lighBase, ...global };

const themesBG = {
  [ThemeBG.CONTRAST]: contrastBG,
  [ThemeBG.LIGHT]: lightBG
};

export {
  contrastBG,
  lightBG,
  themesBG
};