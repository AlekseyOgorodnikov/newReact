import * as axios from "axios";

//setting axios (write baseURL)
const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        "API-KEY": "fcd3f1a5-c049-4a42-9827-179c9da781d8"
    }
});

export const usersAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return (instance.get(`users?page=${currentPage}&count=${pageSize}`)).then(response => {
            return (
                response.data
            )
        });
    },
    follow(userId) {
        return instance.post(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
    unfollow(userId) {
        return instance.delete(`https://social-network.samuraijs.com/api/1.0/follow/${userId}`)
    },
}
