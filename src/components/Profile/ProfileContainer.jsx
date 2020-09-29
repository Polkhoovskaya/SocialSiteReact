import React from 'react';
import { connect } from 'react-redux';
import Profile from './Profile';
import { setUserProfile, setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator } from '../../redux/profilePage-reducer';
import { withRouter } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

class ProfileContainer extends React.Component {

    componentDidMount() {
        let userId = this.props.match.params.userId;
        if (!userId) {
            userId = this.props.id;
        }

        this.props.setProfileThunkCreator(userId);
        this.props.getStatusThunkCreator(userId);
    }

    render() {
        return <Profile {...this.props} profile={this.props.profile} status={this.props.status} updateStatus={this.props.updateStatusThunkCreator} />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    id: state.auth.userId,
    isAuth: state.auth.isAuth
});

export default compose(
    connect(mapStateToProps, { setUserProfile, setProfileThunkCreator, getStatusThunkCreator, updateStatusThunkCreator }),
    withRouter,
    withAuthRedirect)(ProfileContainer);