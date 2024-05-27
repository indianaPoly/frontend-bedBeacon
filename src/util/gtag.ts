import ReactGA from 'react-ga4';

const PageViewTrigger = (pathname: string) => {
  ReactGA.send({
    hitType: 'pageview',
    page: pathname,
  });
};

export default PageViewTrigger;
