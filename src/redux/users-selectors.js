import { createSelector } from "reselect";

export const getUsers = (state) => {
    return state.usersPage.users;
}

export const testReselectLibSelector = createSelector(getUsers, (users) => {
    //используется примитивный селектор внутри сложного
    return users.filter(u => true);
})

export const getPageSize = (state) => {
    return state.usersPage.pageSize;
}

export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount;
}

export const getCurrentPage = (state) => {
    return state.usersPage.currentPage;
}

export const getIsLoading = (state) => {
    return state.usersPage.isLoading;
}

export const getFollowingProgress = (state) => {
    return state.usersPage.followingProgress;
}