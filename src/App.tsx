import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from './components/Profile/Profile';
import Dialogs from "./components/Dialogs/Dialogs";
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";

export const App = () => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} component={Dialogs}/>
                <Route path={'/profile'} component={Profile}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
            </div>
        </div>
    );
}

