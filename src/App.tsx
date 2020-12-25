import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Advertise } from './components/Advertise';
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { Photo } from './components/Photo'
import { PersonalInfo } from './components/PersonalInfo';
import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Social } from './components/Social';

function App() {
  return (
    <div className='app-wrapper'>
      <Header />
      <Navigation />
      <Photo />
      <PersonalInfo />
      <Main />
      <Advertise />
      <Social />
      <Footer />
    </div>
  );
}

export default App;
