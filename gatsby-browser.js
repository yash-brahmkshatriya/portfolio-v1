import './src/styles/global.css';

export const onRouteUpdate = ({ location }) => {
  if (location.pathname === '/') window.scrollTo(0, 0);
};

export const shouldUpdateScroll = (args) => {
  const { routerProps } = args;
  if (routerProps.location.pathname === '/') {
    return false;
  } else return true;
};
