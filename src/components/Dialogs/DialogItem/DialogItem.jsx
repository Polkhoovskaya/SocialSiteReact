import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './DialogItem.module.css';

const DialogItem = ({ name, id }) => {
    return <div className={s.dialog}>
        <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" />
        <NavLink to={"/dialogs/" + id} activeClassName={s.active}>{name}</NavLink>
    </div>;
}

export default DialogItem;