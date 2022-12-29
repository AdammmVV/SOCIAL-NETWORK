import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import NavBar from "./components/Navbar/NavBar";
import Content from './components/Profile/Profile';

const App = () => {
  return (
    <div className="app-wrapper">
        <Header />
        <NavBar />
        <Content />
    </div>
  );
}

export default App;
