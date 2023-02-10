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
import {ActionType, StateType} from "./redux/store";

type AppPropsType = {
    state: StateType
    dispatch: (action: ActionType) => void
}

export const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar friend={props.state.navBar.nav}/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogMessage={props.state.dialogsPage.dialogMessage}
                    state={props.state.dialogsPage}
                    dispatch={props.dispatch}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           profileMessage={props.state.profilePage.profileMessage}
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
            </div>
        </div>
    );
}



