import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';

import { ExperiencePage, NotFoundPage, Navbar } from './components';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route path="" element={<HomePage />} />
              <Route path="experience" element={<ExperiencePage />}/>
              <Route path="*" element={<NotFoundPage />} />
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
