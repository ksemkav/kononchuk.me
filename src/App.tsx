import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { LanguageProvider } from './application/localization/LanguageProvider';
import { Home } from './pages/home/Home';
import { ResponsivePage } from './pages/responsive-page/ResponsivePage';

function App() {
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
