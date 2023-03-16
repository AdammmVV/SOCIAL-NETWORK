import axios from "axios";

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
        const response = await axios.get(`profile/${userId}`)
        return response.data

    },
}