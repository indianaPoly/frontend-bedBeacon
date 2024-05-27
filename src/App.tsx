import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import { useEffect } from 'react';
import Router from './router';

const App = () => {
  useEffect(() => {
    ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_KEY}`);
  }, []);
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
