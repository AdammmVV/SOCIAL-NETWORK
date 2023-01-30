import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {
    addMessages,
    addPost,
    state,
    StateType,
    subscriber,
    updateDialogMessage,
    updateProfileMessage
} from "./redux/state";

export const rerenderEnteredTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessages={addMessages}
                 updateProfileMessage={updateProfileMessage}
                 updateDialogMessage={updateDialogMessage}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderEnteredTree(state)

subscriber(rerenderEnteredTree)