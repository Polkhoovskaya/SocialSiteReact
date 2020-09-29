import React from 'react';
import userPhoto from '../../assets/images/avatar.jfif';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
//import { follow, unFollow } from '../../api/api';

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return <span className={props.currentPage === p && s.selectedPage}
                        onClick={(e) => { props.onPageChanget(p) }}
                    >{p}
                    </span>
                })}
            </div>
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {
                props.users.map(user => {
                    return <div key={user.id}>
                        <span>
                            <div>
                                <NavLink to={"/profile/" + user.id} ><img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto}></img></NavLink>
                            </div>
                            <div>
                                {user.followed
                                    ? <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                        //без thunk
                                        // props.toggleFollowingProgress(true, user.id);
                                        // unFollow(user.id)
                                        //     .then(data => {
                                        //         if (data.resultCode == 0) {
                                        //             props.unFollow(user.id);
                                        //         }
                                        //         props.toggleFollowingProgress(false, user.id);
                                        //     })
                                        props.unFollow(user.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
                                        //без thunk
                                        // props.toggleFollowingProgress(true, user.id);
                                        // follow(user.id)
                                        //     .then(data => {
                                        //         if (data.resultCode == 0) {
                                        //             props.follow(user.id)
                                        //         }
                                        //         props.toggleFollowingProgress(false, user.id);
                                        //     })
                                        props.follow(user.id);
                                    }}>Follow</button>}
                            </div>
                        </span>
                        <span>
                            <span>
                                <div>{user.name}</div>
                                <div>{user.satus}</div>
                            </span>
                            <span>
                                <div>{"user.location.country"}</div>
                                <div>{"user.location.sity"}</div>
                            </span>
                        </span>
                    </div>
                })
            }
        </div>
    );
}

export default Users;