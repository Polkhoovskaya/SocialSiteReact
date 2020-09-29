import React from 'react';
import s from './Post.module.css';

const Post = ({ post }) => {
    return (
        <div className={s.item} key={post.key}>
            <img src="https://www.shareicon.net/data/512x512/2016/09/15/829453_user_512x512.png" />
            {post}
        </div>
    );
}

export default Post;