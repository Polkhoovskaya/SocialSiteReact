import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FromsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength = maxLengthCreator(10);

const MyPostsForm = (props) => {

    return <form onSubmit={props.handleSubmit}>
        <Field name={'newPost'} placeholder={"newPost"} component={Textarea} validate={[requiredField, maxLength]} />
        <button>Add post</button>
        <button>Remove</button>
    </form>
}

const MyPostsReduxFrom = reduxForm({ form: 'myPosts' })(MyPostsForm);

const MyPosts = React.memo(
    (props) => {

        const onSubmit = (formData) => {
            props.addNewPost(formData);
        }

        return (
            <div className={s.main}>
                <div>
                    posts
                   <MyPostsReduxFrom {...props} onSubmit={onSubmit} />
                    <div>
                        {
                            props.postsData.map(post => <Post post={post.post} key={post.id} />)
                        }
                    </div>
                </div>
            </div>
        );
    }
)


export default MyPosts;