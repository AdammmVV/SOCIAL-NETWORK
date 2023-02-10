import {v1} from "uuid";
import logoMan from '../img/logo-man.jpg'
import logoWoman from '../img/logoWoman.jpg'

export type ActionType = {
    type: 'ADD-POST' | 'ADD-MESSAGE' | 'UPDATE-PROFILE-MESSAGE' | 'UPDATE-DIALOG-MESSAGE'
    newMessage?: string
}
export type NavType = {
    id: string
    name: string
    avatar: string
    online: boolean
}
export type MessagesType = {
    id: string
    message: string
}
export type DialogsType = {
    id: string
    name: string
    src: string
}
export type PostsType = {
    id: string
    message: string
    likeCount: string
}
export type NavBarType = {
    nav: NavType[]
}
export type profilePageType = {
    posts: PostsType[]
    profileMessage: string
}
export type dialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
    dialogMessage: string
}
export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
    navBar: NavBarType
}
export type StoreType = {
    _state: StateType
    _callSubscriber: (state: StateType) => void
    getState: () => StateType
    subscriber: (observe: (state: StateType) => void) => void
    dispatch: (action: ActionType) => void
}

export const store: StoreType = {
    _state: {
        profilePage: {
            posts: [
                {id: v1(), message: 'How are you?', likeCount: '12'},
                {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
                {id: v1(), message: 'Yo!', likeCount: '17'},
            ],
            profileMessage: '',
        },
        dialogsPage: {
            dialogs: [
                {
                    id: '1',
                    name: 'Valery',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/if1/GnIkxNS5nUi_X6dRglq1iSgKKDBpaBqJ-_cCR2Q24UkyEjmdSO8hBfoRb8o0rBq3IH8KJUAA.jpg?size=50x50&quality=96&crop=143,0,568,568&ava=1'
                },
                {
                    id: '2',
                    name: 'Andrey',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/ZJ2iKLQ6LWWRJZoqcEsf44oePArQ4k6bUSc6Ql5eFxz1Heexr3VsMikhcMdysgPx1uKbpFxMBLe071U7thLUGGx7.jpg?size=100x100&quality=96&crop=0,282,1782,1782&ava=1'
                },
                {
                    id: '3',
                    name: 'Vladimir',
                    src: 'https://sun1.velcom-by-minsk.userapi.com/s/v1/if1/ZR6X3zKLjLGoMUuzbjSpOdk00QQln_ubEwmruhcr7WDGdtwKAm56j6L1rfGORJa3pxkxBfyl.jpg?size=100x100&quality=96&crop=2,63,409,409&ava=1'
                },
                {
                    id: '4',
                    name: 'Alena',
                    src: 'https://sun2.velcom-by-minsk.userapi.com/s/v1/ig2/wsIVlSdYe8mi2bCtsNarhECW7zuealPWeS627vT3hWPvLS0oeVVu8dK4vV1GKDW03oHkfVMI1Rz4xG5TzKqA8XxN.jpg?size=100x100&quality=95&crop=219,454,515,515&ava=1'
                },
            ],
            messages: [
                {id: v1(), message: 'I`m Valery'},
                {id: v1(), message: 'How are you?'},
                {id: v1(), message: 'I`m Alena'},
            ],
            dialogMessage: ''
        },
        navBar: {
            nav: [
                {
                    id: v1(),
                    name: 'Andrey',
                    avatar: `${logoMan}`,
                    online: true,
                },
                {
                    id: v1(),
                    name: 'Vladimir',
                    avatar: `${logoMan}`,
                    online: true,
                },
                {
                    id: v1(),
                    name: 'Alena',
                    avatar: `${logoWoman}`,
                    online: false,
                },
                {
                    id: v1(),
                    name: 'Roma',
                    avatar: `${logoMan}`,
                    online: true,
                },
                {
                    id: v1(),
                    name: 'Valentina',
                    avatar: `${logoWoman}`,
                    online: false,
                },
            ],
        },
    },
    _callSubscriber(state: StateType) {
        console.log(`changed ${state}`)
    },
    getState() {
        return this._state
    },
    subscriber(observe: (state: StateType) => void) {
        this._callSubscriber = observe
    },
    dispatch(action) {
        if (action.type === "ADD-POST") {
            let post = {id: v1(), message: this._state.profilePage.profileMessage, likeCount: '0'}
            this._state.profilePage.posts.push(post)
            this._state.profilePage.profileMessage = ''
            this._callSubscriber(store._state)
        } else if (action.type === "ADD-MESSAGE") {
            let message = {id: v1(), message: this._state.dialogsPage.dialogMessage}
            this._state.dialogsPage.messages.push(message)
            this._state.dialogsPage.dialogMessage = ''
            this._callSubscriber(store._state)
        } else if (action.type === "UPDATE-PROFILE-MESSAGE") {
            if (action.newMessage) this._state.profilePage.profileMessage = action.newMessage
            this._callSubscriber(store._state)
        } else if (action.type === "UPDATE-DIALOG-MESSAGE") {
            if (action.newMessage) this._state.dialogsPage.dialogMessage = action.newMessage
            this._callSubscriber(store._state)
        }
    },
}
