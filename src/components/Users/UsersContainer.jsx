import React from 'react';
import { connect } from 'react-redux';
import UsersAPIComponent from './UsersAPIComponent';
import { follow, unFollow, setCurrentPage, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/users-reducer';
import { compose } from 'redux';
import { getPageSize, getTotalUsersCount, getCurrentPage, getIsLoading, getFollowingProgress, testReselectLibSelector } from '../../redux/users-selectors';


let mapStateToProps = (state) => {
    return {
        users: testReselectLibSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isLoading: getIsLoading(state),
        followingProgress: getFollowingProgress(state)
    }
};

export default compose(connect(mapStateToProps,
    {
        follow,
        unFollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator
    }))(UsersAPIComponent);
