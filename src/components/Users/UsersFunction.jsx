import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.jfif';


let Users = ({ users, follow, unFollow, setUsers }) => {

    if (users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            setUsers(response.data.items);
        });
    }

    return (
        <div>
            {
                users.map(user => {
                    return <div key={user.id}>
                        <span>
                            <div>
                                <img className={s.photo} src={user.photos.small != null ? user.photos.small : userPhoto}></img>
                            </div>
                            <div>
                                {user.followed ? <button onClick={() => { unFollow(user.id) }}>Unfollow</button> : <button onClick={() => { follow(user.id) }}>Follow</button>}
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