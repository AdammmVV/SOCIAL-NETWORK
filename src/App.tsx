import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Header />
        <NavBar />
        <Content />
    </div>
  );
}

const NavBar = () => {
    return (
        <div>
            <div>Profile</div>
            <div>Message</div>
            <div>News</div>
            <div>Music</div>
            <div>Setting</div>
        </div>
    );
}

const Content = () => {
    return (
        <div>
            <div>My content</div>
        </div>
    )
}

export default App;
