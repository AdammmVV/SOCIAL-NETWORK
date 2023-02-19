import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {StateType} from "./redux/store";
import {store} from "./redux/redux-store";
import {StoreContext} from "./StoreContext";

export const rerenderEnteredTree = (state: StateType) => {
    ReactDOM.render(
        <StoreContext.Provider value={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </StoreContext.Provider>
        , document.getElementById('root')
    );
}
rerenderEnteredTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEnteredTree(state)
})