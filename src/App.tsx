import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";


export const App = () => {
    return (
        <div className="app-wrapper">
            <HeaderContainer/>
            <NavBarContainer/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} component={DialogsContainer}/>
                <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
                <Route path={'/users'} component={UsersContainer}/>
            </div>
        </div>
    );
}