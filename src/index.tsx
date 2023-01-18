import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {App} from './App';
import {BrowserRouter} from "react-router-dom";
import {v1} from "uuid";

export type MessagesType = {
    id: string
    message: string
}

export type DialogsType = {
    id: string
    name: string
}

export type PostsType = {
    id: string
    message: string
    likeCount: string
}

export type StateType = {
    posts: PostsType[]
    dialogs: DialogsType[]
    messages: MessagesType[]
}


const state: StateType = {
    posts: [
        {id: v1(), message: 'How are you?', likeCount: '12'},
        {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
        {id: v1(), message: 'Yo!', likeCount: '17'},
    ],
    dialogs: [
        {id: v1(), name: 'Adammm'},
        {id: v1(), name: 'Dron'},
        {id: v1(), name: 'Alena'},
        {id: v1(), name: 'Valentina'},
    ],
    messages: [
        {id: v1(), message: 'I`m Valery'},
        {id: v1(), message: 'How are you?'},
        {id: v1(), message: 'I`m Alena'},
    ],
}


ReactDOM.render(
    <BrowserRouter>
        <App state={state}/>
    </BrowserRouter>
    , document.getElementById('root')
);