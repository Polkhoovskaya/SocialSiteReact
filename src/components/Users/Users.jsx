import React from 'react';
import userPhoto from '../../assets/images/avatar.jfif';
import { NavLink } from 'react-router-dom';
import s from './Users.module.css';
import Paginator from './Paginator';

const Users = (props) => {

    return (
        <div>
            <Paginator totalItemsCount={props.totalUsersCount} pageSize={props.pageSize} currentPage={props.currentPage} onPageChanget={props.onPageChanget} portionSize={10} />
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
                                        props.unFollow(user.id);
                                    }}>Unfollow</button>
                                    : <button disabled={props.followingProgress.some(id => id === user.id)} onClick={() => {
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