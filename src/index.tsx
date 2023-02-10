import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType, store} from "./redux/store";

export const rerenderEnteredTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={store.addPost.bind(store)}
                 addMessages={store.addMessages.bind(store)}
                 updateProfileMessage={store.updateProfileMessage.bind(store)}
                 updateDialogMessage={store.updateDialogMessage.bind(store)}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderEnteredTree(store.getState())

store.subscriber(rerenderEnteredTree)