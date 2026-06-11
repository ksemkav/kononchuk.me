import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './application/localization/LanguageProvider';
import { Datenschutz } from './pages/datenschutz/Datenschutz';
import { Home } from './pages/home/Home';
import { Impressum } from './pages/impressum/Impressum';
import { ResponsivePage } from './pages/responsive-page/ResponsivePage';
import { useIsRuDomain } from './helpers/useIsRuDomain';

function App() {
  const isRuDomain = useIsRuDomain();

  return (
    <LanguageProvider>
      <BrowserRouter>
        <Routes>
          {!isRuDomain && (
            <>
              <Route
                path={'/impressum'}
                element={
                  <ResponsivePage>
                    <Impressum />
                  </ResponsivePage>
                }
              />
              <Route
                path={'/datenschutz'}
                element={
                  <ResponsivePage maxWidth={920}>
                    <Datenschutz />
                  </ResponsivePage>
                }
              />
            </>
          )}
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
