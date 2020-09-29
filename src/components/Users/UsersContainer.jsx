import React from 'react';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { follow, unFollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsLoading, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer';
import { compose } from 'redux';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsLoading, getFollowingProgress, testReselectLibSelector } from '../../redux/users-selectors';

// let mapStateToProps = (state) => {
//     return {
//         users: state.usersPage.users,
//         pageSize: state.usersPage.pageSize,
//         totalUsersCount: state.usersPage.totalUsersCount,
//         currentPage: state.usersPage.currentPage,
//         isLoading: state.usersPage.isLoading,
//         followingProgress: state.usersPage.followingProgress
//     }
// };


let mapStateToProps = (state) => {
    console.log('map');
    return {
        // users: getUsers(state),
        users: testReselectLibSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingProgress: getFollowingProgress(state)
    }
};


//можно упрощенно заносить эти данные в connect
// let mapDispatchToProps = (dispatch) => {
//     return {
//         follow: (id) => {
//             dispatch(followActionCreator(id))
//         },
//         unFollow: (id) => {
//             dispatch(unfollowActionCreator(id))
//         },
//         setUsers: (users) => {
//             dispatch(setUsersActionCreator(users))
//         },
//         setCurrentPage: (page) => {
//             dispatch(setCurrentPageActionCreator(page));
//         },
//         setTotalUsersCount: (totalUsersCount) => {
//             dispatch(setTotalUsersCountActionCreator(totalUsersCount));
//         },
//         toggleIsLoading: (isLoading) => {
//             dispatch(toggleIsLoadingActionCreator(isLoading));
//         }
//     }
// };

export default compose(connect(mapStateToProps,
    {
        follow,
        unFollow,
        // setUsers,
        setCurrentPage,
        // setTotalUsersCount,
        // toggleIsLoading,
        toggleFollowingProgress,
        getUsersThunkCreator
    }))(UsersAPIComponent);

// const UsersContainer = connect(mapStateToProps,
//     {
//         follow,
//         unFollow,
//         // setUsers,
//         setCurrentPage,
//         // setTotalUsersCount,
//         // toggleIsLoading,
//         toggleFollowingProgress,
//         getUsersThunkCreator
//     })(UsersAPIComponent);

// export default UsersContainer;