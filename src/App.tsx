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
import {StateType} from "./index";

type AppPropsType = {
    state: StateType
}

export const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} component={()=><Dialogs
                    dialogs={props.state.dialogs}
                    messages={props.state.messages}/>}/>
                <Route path={'/profile'} component={()=><Profile
                    posts={props.state.posts}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
            </div>
        </div>
    );
}

