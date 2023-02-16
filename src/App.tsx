import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import {NavBar} from "./components/Navbar/NavBar";
import {Profile} from './components/Profile/Profile';
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {StoreType} from "./redux/store";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";

type AppPropsType = {
    store: StoreType
}

export const App = (props: AppPropsType) => {

    let state = props.store.getState()

    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar friend={state.navBar.nav}/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} render={() => <DialogsContainer store={props.store}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile store={props.store}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
            </div>
        </div>
    );
}



