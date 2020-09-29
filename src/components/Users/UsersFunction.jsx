import Axios from 'axios';
import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/avatar.jfif';


let Users = ({ users, follow, unFollow, setUsers }) => {

    // let users = [
    //     { id: 1, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU", fullName: "Olga", location: { country: "Belarus", sity: "Minsk" }, status: 'I am so pretty', followed: false },
    //     { id: 2, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU", fullName: "Simon", location: { country: "Turkey", sity: "Istanbul" }, status: 'I am so pretty too', followed: true },
    //     { id: 3, photoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR01mUdp62kN2vyu7FWyXLNKdhJSrjnnHsdfQ&usqp=CAU", fullName: "Bred", location: { country: "Ukraine", sity: "kiev" }, status: 'I am so pretty too!!!', followed: false }
    // ];

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