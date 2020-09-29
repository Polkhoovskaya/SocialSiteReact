import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';

const Header = (props) => {

    return (
        <header className={s.header}>
            <img src="https://st.depositphotos.com/2000885/1902/i/450/depositphotos_19021343-stock-photo-red-heart.jpg" ></img>
            <div className={s.authBlock}>
                {props.isAuth ? <div><div>{props.login}</div><button onClick={props.logoutThunkCreator}>Logout</button></div> : <NavLink to={'./login'}><p>Login</p></NavLink>}
            </div>
        </header>
    );
}

export default Header;