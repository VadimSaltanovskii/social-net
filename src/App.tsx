import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/Header/Header';
import { Navigation } from './components/Nav/Navigation';
import { Footer } from './components/Footer/Footer';
import { AboutUser } from './components/MyInfo/AboutUser';
import { MainContent } from './components/MainContent/MainContent';

function App() {
  return (
    <div className="wrapper">
      <Header />
      <Navigation />
      <AboutUser />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
