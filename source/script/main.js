import "../scss/style.scss"
import "./utils/prism.js";
import "./modules/header/init-page-menu.js";
import "./modules/filter/init-filter";
import {iosVhFix} from "./utils/ios-vh-fix.js";

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  window.addEventListener('load', () => {

  });
});
