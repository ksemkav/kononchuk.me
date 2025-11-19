import { useEffect } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './application/localization/LanguageProvider';
import { GA_TRACKING_ID } from './application/constants';
import { Home } from './pages/home/Home';
import { ResponsivePage } from './pages/responsive-page/ResponsivePage';
import ReactGA from 'react-ga4';

ReactGA.initialize(GA_TRACKING_ID);

function App() {
  useEffect(() => {
    ReactGA.send('pageview');
  }, []);

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={'*'}
            element={
              <ResponsivePage>
                <Home />
              </ResponsivePage>
            }
          />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
