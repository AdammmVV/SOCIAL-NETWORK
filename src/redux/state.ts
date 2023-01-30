import {v1} from "uuid";

let rerenderEnteredTree = (state: StateType) => {
    console.log(`changed ${state}`)
}


export type NavType = {
    id: string
    name: string
    avatar: string
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


export const state: StateType = {
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
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fm.yandex.by%2Fimages%2Ftouch%2Fsearch%3Ftext%3D%25D0%25B0%25D0%25B2%25D0%25B0%25D1%2582%25D0%25B0%25D1%2580%2520%25D0%25B7%25D0%25B0%25D0%25B3%25D0%25BB%25D1%2583%25D1%2588%25D0%25BA%25D0%25B0&psig=AOvVaw2nifAkvNn_JEhHElVqGSYS&ust=1674911489611000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODp8dTp5_wCFQAAAAAdAAAAABAo',
            },
            {
                id: v1(),
                name: 'Vladimir',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fseeding.com.ua%2Fotzyvy%2Fvolodimir-merkulov-pp-m-agro-zaporizka-obl%2Fattachment%2Favatarka-dlja-otzyvov%2F&psig=AOvVaw2nifAkvNn_JEhHElVqGSYS&ust=1674911489611000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODp8dTp5_wCFQAAAAAdAAAAABAy',
            },
            {
                id: v1(),
                name: 'Alena',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Ficon-icons.com%2Fpt%2Ficone%2Fmulher%2F25435&psig=AOvVaw2nifAkvNn_JEhHElVqGSYS&ust=1674911489611000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCODp8dTp5_wCFQAAAAAdAAAAABBG',
            },
            {
                id: v1(),
                name: 'Roma',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fbipbap.ru%2Fpictures%2Fprikolnye-avatarki-dlya-youtube-150-kartinok.html&psig=AOvVaw0ZloIHn-gpy7_5PIhAOYKL&ust=1674911890163000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOi77pPr5_wCFQAAAAAdAAAAABAE',
            },
            {
                id: v1(),
                name: 'Valentina',
                avatar: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.flaticon.com%2Ffr%2Ficone-gratuite%2Ffemme_2922650&psig=AOvVaw2nifAkvNn_JEhHElVqGSYS&ust=1674911489611000&source=images&cd=vfe&ved=0CBAQjRxqGAoTCODp8dTp5_wCFQAAAAAdAAAAABCWAQ',
            },
        ],
    }
}

export const addPost = () => {
    let post = {id: v1(), message: state.profilePage.profileMessage, likeCount: '0'}
    state.profilePage.posts.push(post)
    state.profilePage.profileMessage = ''
    rerenderEnteredTree(state)
}

export  const addMessages = () => {
    let message = {id: v1(), message: state.dialogsPage.dialogMessage}
    state.dialogsPage.messages.push(message)
    state.dialogsPage.dialogMessage = ''
    rerenderEnteredTree(state)
}

export const updateProfileMessage = (textareaValue: string) => {
    state.profilePage.profileMessage = textareaValue
    rerenderEnteredTree(state)
}

export const updateDialogMessage = (textareaValue: string) => {
    state.dialogsPage.dialogMessage = textareaValue
    rerenderEnteredTree(state)
}
export const subscriber = (observe: (state:StateType)=>void) => {
    rerenderEnteredTree = observe
}