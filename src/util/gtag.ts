import ReactGA from 'react-ga4';

const PageViewTrigger = () => {
  ReactGA.send({
    hitType: 'pageview',
    page_location: window.location.href,
    page_path: window.location.pathname,
    page_title: document.title, // 페이지 제목도 함께 설정
  });
};

export default PageViewTrigger;
