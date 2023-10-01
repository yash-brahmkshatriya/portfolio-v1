import './src/styles/global.css';

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/' && !location.hash) {
    window.scrollTo(0, 0);
  }
};
