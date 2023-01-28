import {v1} from "uuid";

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

export type profilePageType = {
    posts: PostsType[]
}

export type dialogsPageType = {
    dialogs: DialogsType[]
    messages: MessagesType[]
}

export type StateType = {
    profilePage: profilePageType
    dialogsPage: dialogsPageType
}

export const state: StateType = {
    profilePage: {
        posts: [
            {id: v1(), message: 'How are you?', likeCount: '12'},
            {id: v1(), message: 'Hi, I am Adam.', likeCount: '11'},
            {id: v1(), message: 'Yo!', likeCount: '17'},
        ],
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
    },
}