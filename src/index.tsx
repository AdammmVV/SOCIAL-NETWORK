import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";

export const rerenderEnteredTree = (state: StateType) => {
    ReactDOM.render(
        <BrowserRouter>
            <App store={store}/>
        </BrowserRouter>
        , document.getElementById('root')
    );
}
rerenderEnteredTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEnteredTree(state)
})