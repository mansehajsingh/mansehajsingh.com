import { HashRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';

import { ExperiencePage, Navbar } from './components';
import Footer from './components/Footer/Footer';
import HomePage from './components/HomePage/HomePage';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <HashRouter>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route path="" element={<HomePage />} />
              <Route path="experience" element={<ExperiencePage />}/>
            </Route>
          </Routes>
          <Footer/>
        </HashRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
