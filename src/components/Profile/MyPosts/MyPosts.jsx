import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { maxLengthCreator, requiredField } from '../../../utils/validators/validators';
import { Textarea } from '../../common/FormsControls/FromsControls';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const maxLength = maxLengthCreator(10);

const MyPostsForm = (props) => {

    // let textarea = React.createRef();

    // let addPost = () => {
    //     props.addNewPost();
    // }

    // let onPostChange = () => {
    //     let text = textarea.current.value;
    //     props.updateNewPostText(text);
    // }

    return <form onSubmit={props.handleSubmit}>
        {/* <textarea ref={textarea} onChange={onPostChange} value={props.newPostText} />
        <button onClick={addPost}>Add post</button>
        <button>Remove</button> */}
        <Field name={'newPost'} placeholder={"newPost"} component={Textarea} validate={[requiredField, maxLength]} />
        {/* <Field name={'newPost'} placeholder={"newPost"} component="textarea" validate={[requiredField, maxLength]} /> */}
        <button>Add post</button>
        <button>Remove</button>
    </form>
}

const MyPostsReduxFrom = reduxForm({ form: 'myPosts' })(MyPostsForm);

// const MyPosts = (props) => {

//     const onSubmit = (formData) => {
//         props.addNewPost(formData);
//     }

//     return (
//         <div className={s.main}>
//             <div>
//                 posts
//                <MyPostsReduxFrom {...props} onSubmit={onSubmit} />
//                 <div>
//                     {
//                         props.postsData.map(post => <Post post={post.post} key={post.id} />)
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }

// class MyPosts extends React.Component {

//     componentDidUpdate() {
//         setTimeout(() => {
//             this.setState({
//                 a: 12
//             });
//         }, 3000)
//     }

//     shouldComponentUpdate(nextProps, nextState) {
//         return nextProps != this.props || nextState != this.state;
//     }

//     render() {
//         console.log("render");

//         const onSubmit = (formData) => {
//             this.props.addNewPost(formData);
//         }

//         return (
//             <div className={s.main} >
//                 <div>
//                     posts
//                    <MyPostsReduxFrom {...this.props} onSubmit={onSubmit} />
//                     <div>
//                         {
//                             this.props.postsData.map(post => <Post post={post.post} key={post.id} />)
//                         }
//                     </div>
//                 </div>
//             </div>
//         );
//     }
// }

const MyPosts = React.memo(
    (props) => {

        console.log('return');

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