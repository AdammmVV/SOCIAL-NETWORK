import axios from "axios";
import {FormDataType} from "../components/Login/Login";

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": '19894441-f3c5-4f64-9b04-9836d34539c7'
    }
})

export const usersAPI = {
    async getUsers(countPage: number, numberPage: number) {
        const response = await instance.get(`users?count=${countPage}&page=${numberPage}`)
        return response.data
    },
    async createFollow(userId: number) {
        const response = await instance.post(`follow/${userId}`)
        return response.data
    },
    async createUnfollow(userId: number) {
        const response = await instance.delete(`follow/${userId}`)
        return response.data
    },
}

export const authAPI = {
    getMe: async () => {
        const res = await instance.get<CommonResponseType<AuthResponse>>(`auth/me`)
        return res.data
    },
    logIn: async (dataLogin: FormDataType) => {
        const data = {
            email: dataLogin.email,
            password: dataLogin.password,
            rememberMe: dataLogin.rememberMe
        }
        const res = await instance.post<CommonResponseType<{userId: number}>>('auth/login', data)
        return res.data
    },
    logOut: async () => {
        const res = await instance.delete<CommonResponseType>('auth/login')
        return res.data
    }
}

export const profileAPI = {
    getProfileStatus: async (userId: string) => {
        const res = await instance.get<string>(`profile/status/${userId}`)
        return res.data
    },
    updateStatus: async (status: string) => {
        const res = await instance.put<CommonResponseType>('profile/status', {status: status})
        return res.data
    },
   getProfileUser: async (userId: string) => {
        const res = await instance.get<GetProfileUserResponseType>(`profile/${userId}`)
        return res.data
    },
    putProfile: async (data: ProfileDomainType) => {
        const res = await instance.put<CommonResponseType>('profile', data)
        return res.data
    },
    putPhoto: async (data: FormData) => {
        const res = await instance.put('profile/photo', data)
        return res.data
    }
}

export const dialogAPI = {
    createDialogWithUser: async (userId: string) => {
        const res = await instance.put<CommonResponseType>(`dialogs/${userId}`, {})
        return res.data
    },
    getDialogMessagesWithUser: async (userId: string) => {
        const res = await instance.get<ResponseDialogMessageType>(`dialogs/${userId}/messages`)
        return res.data
    },
    getDialogs: async () => {
        const res = await instance.get<ResponseDialogsType[]>('dialogs')
        return res.data
    },
    createMessage: async (userId: string, body: {body: string}) => {
        const res = await instance.post<CommonResponseType<ResponseCreateMessageType>>(`dialogs/${userId}/messages`, body)
        return res.data
    },
    isViewedMessage: async (messageId: string) => {
        const res = await instance.get<boolean>(`dialogs/messages/${messageId}/viewed`)
        return res.data
    },
    deleteMessage: async (messageId: string) => {
        const res = await instance.delete<CommonResponseType>(`dialogs/messages/${messageId}`)
        return res.data
    },
    getDialogsCounter: async () => {
        const res = await instance.get<number>('dialogs/messages/new/count')
        return res.data
    }
}

export type CommonResponseType<D = {}> = {
    data: D
    messages: []
    fieldsErrors: []
    resultCode: number
}

type PhotosType = {
    small: null | string
    large: null | string
}

type AuthResponse = {
    id: number
    login: string
    email: string
}

export type ProfileDomainType = {
    contacts: {
        facebook: null | string
        github: null | string
        instagram: null | string
        mainLink: null | string
        twitter: null | string
        vk: null | string
        website: null | string
        youtube: null | string
    },
    lookingForAJob: boolean
    lookingForAJobDescription: null | string
    fullName: null | string
}

export type GetProfileUserResponseType = ProfileDomainType & {
    userId: number
    aboutMe: string
    photos: PhotosType
}

export type ResponseDialogMessageType = {
    items: [
        {
            id: string
            body: string
            translatedBody: null | string
            addedAt: string
            senderId: number
            senderName: string
            recipientId: number
            viewed: boolean
        }
    ],
    totalCount: number
    error: null | string
}

export type ResponseDialogsType = {
    id: number
    userName: string
    hasNewMessages: boolean
    lastDialogActivityDate: string
    lastUserActivityDate: string
    newMessagesCount: number
    photos: PhotosType
}

export type ResponseCreateMessageType = {
    message: {
        id: string
        body: string
        translatedBody: null
        addedAt: string
        senderId: number
        senderName: string
        recipientId: number
        recipientName: string
        viewed: boolean
        deletedBySender: boolean
        deletedByRecipient: boolean
        isSpam: boolean
        distributionId: null
    }
}