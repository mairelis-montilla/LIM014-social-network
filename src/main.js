import { changeView } from './control/router.js';

const init = () => {
  if (window.location.hash === '') {
    window.location.hash = '#/timeline';
  }
  changeView(window.location.hash);
  window.addEventListener('hashchange', () => changeView(window.location.hash));
};

window.addEventListener('load', init);
