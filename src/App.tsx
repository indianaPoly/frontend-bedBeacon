import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import Router from './router';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_KEY}`);
  }, []);

  useEffect(() => {
    const handleBeforeUnload = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = '';
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  });
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
