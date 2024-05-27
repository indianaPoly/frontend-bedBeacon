import './App.css';
import { BrowserRouter } from 'react-router-dom';
import ReactGA from 'react-ga4';
import Router from './router';

ReactGA.initialize(`${import.meta.env.VITE_GOOGLE_KEY}`);

const App = () => {
  return (
    <BrowserRouter>
      <Router />
    </BrowserRouter>
  );
};

export default App;
