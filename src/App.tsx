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
import {StateType} from "./redux/state";

type AppPropsType = {
    state: StateType
    addMessages: (message:string) => void
    addPost: () => void
    updateProfileMessage: (val: string) => void
}

export const App = (props: AppPropsType) => {
    return (
        <div className="app-wrapper">
            <Header/>
            <NavBar/>
            <div className='app-wrapperContent'>
                <Route path={'/dialogs'} render={() => <Dialogs
                    dialogMessage={props.state.dialogsPage.dialogMessage}
                    state={props.state.dialogsPage}
                    addMessages={props.addMessages}/>}/>
                <Route path={'/profile'}
                       render={() => <Profile
                           profileMessage={props.state.profilePage.profileMessage}
                           profilePage={props.state.profilePage}
                           updateProfileMessage={props.updateProfileMessage}
                           addPost={props.addPost}/>}/>
                <Route path={'/news'} component={News}/>
                <Route path={'/music'} component={Music}/>
                <Route path={'/settings'} component={Setting}/>
            </div>
        </div>
    );
}

