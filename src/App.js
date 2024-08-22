import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { MantineProvider } from '@mantine/core';
import './App.css';
import '@mantine/core/styles.css';

import { ExperiencePage, Navbar } from './components';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <MantineProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path='/'>
              <Route path="experience" element={<ExperiencePage />}/>
            </Route>
          </Routes>
          <Footer/>
        </BrowserRouter>
      </MantineProvider>
    </div>
  );
}

export default App;
