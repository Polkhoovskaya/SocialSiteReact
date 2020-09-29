import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

const Navbar = ({ state }) => {
    return (
        <nav className={s.nav}>
            <div className={s.item}><NavLink to="/profile" activeClassName={s.active}>Profile</NavLink></div>
            <div className={s.item}><NavLink to="/dialogs" activeClassName={s.active}>Messages</NavLink></div>
            <div className={s.item}><NavLink to="/users" activeClassName={s.active}>Users</NavLink></div>
            <div className={s.item}><NavLink to="/news" activeClassName={s.active}>News</NavLink></div>
            <div className={s.item}><NavLink to="/music" activeClassName={s.active}>Music</NavLink></div>
            <div className={s.item}><NavLink to="/settings" activeClassName={s.active}>Settings</NavLink></div>
            <div className={s.friendsPanel}>
                <div>Friends</div>
                <div className={s.friends}>
                    {
                        state.friends.map(friend => {
                            return (
                                <div className={s.friend} key={friend.id}>
                                    <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" />
                                    <p>{friend.name}</p>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </nav>
    );
}

export default Navbar;