import React from 'react';
import s from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
// import { Redirect } from 'react-router-dom';

const Profile = (props) => {
    // if (props.isAuth === false) { return <Redirect to={"/login"} /> }
    return (
        <div className={s.main}>
            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer />
        </div>
    );
}

export default Profile;