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
    async getUser(userId: string) {
        const response = await instance.get(`profile/${userId}`)
        return response.data
    },
}

export const authAPI = {
    async getMe() {
        const response = await instance.get(`auth/me`)
        return response.data
    },
    logIn(dataLogin: FormDataType) {
        return instance.post('auth/login', {
            email: dataLogin.email,
            password: dataLogin.password,
            rememberMe: dataLogin.rememberMe
        }).then(data => data.data)
    }
}

export const profileAPI = {
    getProfileStatus(userId: string) {
        return instance.get(`profile/status/${userId}`).then(data => data.data)
    },
    updateStatus(status: string) {
        return instance.put('profile/status', {status: status}).then(data => data)
    }
}