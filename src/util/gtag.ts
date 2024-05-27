import ReactGA from 'react-ga4';

const PageViewTrigger = () => {
  ReactGA.send({
    hitType: 'pageview',
    page_location: window.location.href,
    page_path: window.location.pathname,
  });
};

export default PageViewTrigger;
