import React from 'react';
import ReactDOM from 'react-dom';
import '../index.css';
import {App} from '../App';
import {BrowserRouter} from "react-router-dom";
import {addMessages, addPost, StateType, updateProfileMessage} from "./state";

export const rerenderEnteredTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App state={state}
                 addPost={addPost}
                 addMessages={addMessages}
                 updateProfileMessage={updateProfileMessage}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}