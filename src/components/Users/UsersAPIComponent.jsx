import React from 'react';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersAPIComponent extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    onPageChanget = (page) => {

        this.props.setCurrentPage(page);
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    }

    render() {
        return (
            <div>
                {
                    this.props.isLoading ? <Preloader /> :
                        <Users totalUsersCount={this.props.totalUsersCount}
                            pageSize={this.props.pageSize}
                            onPageChanget={this.onPageChanget}
                            currentPage={this.props.currentPage}
                            users={this.props.users}
                            unFollow={this.props.unFollow}
                            follow={this.props.follow}
                            followingProgress={this.props.followingProgress}
                            toggleFollowingProgress={this.props.toggleFollowingProgress} />
                }
            </div>
        )
    }
}

export default UsersAPIComponent;