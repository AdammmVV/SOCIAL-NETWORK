import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div className="App">
        <Header />
        <NavBar />

     <ul>
         <li>css</li>
         <li>html</li>
         <li>js</li>
         <li>react</li>
     </ul>
    </div>
  );
}

const NavBar = () => {
    return (
        <div>

        </div>
    );
}


export default App;
