import React from 'react';
import './App.css';
import Header from "./components/Header/Header";

function App() {
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
            <a href="#">Dialog</a>
            <a href="#">Message</a>
            <a href="#">Dialog</a>
            <a href="#">Dialog</a>
            <a href="#">Dialog</a>
        </div>
    )
}

export default App;
