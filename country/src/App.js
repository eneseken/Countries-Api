import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import CountryDetail from './components/CountryDetail';
import Header from './components/Header';
import './App.css';

function App() {
  const [theme, setTheme] = useState('light'); // Default theme is light

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div className={`app ${theme}`}>
      <BrowserRouter>
        <Header toggleTheme={toggleTheme} />
        <div>
          <Routes>
            {/* Pass theme to CountryList */}
            <Route path="/" element={<CountryList theme={theme} />} />
            <Route path="/countries/:countryName" element={<CountryDetail />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
