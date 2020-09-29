import axios from 'axios';

const instance = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: { 'API-KEY': '372328b3-bf81-42d0-8c1e-fab40f233c14' }
});

export const getUsers = (currentPage = 1, pageSize = 10) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`)
        .then(response => {
            return response.data;
        });
}

export const getAuth = () => {
    return instance.get(`auth/me`)
        .then(response => {
            return response.data;
        });
}

export const getProfile = (userId) => {
    return instance.get(`profile/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const getStatus = (userId) => {
    return instance.get(`profile/status/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const updateStatus = (status) => {
    return instance.put(`profile/status`, {
        status: status
    })
        .then(response => {
            return response.data;
        });
}

export const followAPI = (userId) => {
    return instance.post(`follow/${userId}`, {})
        .then(response => {
            return response.data;
        });
}

export const unFollowAPI = (userId) => {
    return instance.delete(`follow/${userId}`)
        .then(response => {
            return response.data;
        });
}

export const login = (email, password, rememberMe = false) => {
    return instance.post(`auth/login`, {
        email: email,
        password: password,
        rememberMe: rememberMe
    })
        .then(response => {
            return response.data;
        });
}

export const logout = () => {
    return instance.delete(`auth/login`)
        .then(response => {
            return response.data;
        });
}