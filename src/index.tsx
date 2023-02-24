import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {AppStateType, store} from "./redux/redux-store";
import { Provider } from 'react-redux';

export const rerenderEnteredTree = (state: AppStateType) => {
    ReactDOM.render(
        <Provider store={store}>
            <BrowserRouter>
                <App/>
            </BrowserRouter>
        </Provider>
        , document.getElementById('root')
    );
}
rerenderEnteredTree(store.getState())

store.subscribe(()=> {
    let state = store.getState()
    rerenderEnteredTree(state)
})