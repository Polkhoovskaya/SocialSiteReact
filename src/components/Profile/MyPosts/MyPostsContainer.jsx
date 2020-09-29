import React from 'react';
import { addPostActionCreator, onPostChangeActionCreator } from '../../../redux/profilePage-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';


let mapStateToProps = (state) => {
    return {
        postsData: state.profilePage.postsData,
        // newPostText: state.profilePage.newPostText
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        // updateNewPostText: (text) => {
        //     dispatch(onPostChangeActionCreator(text));
        // },
        addNewPost: (formData) => {
            dispatch(addPostActionCreator(formData));
        }

    }
}
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;

// const MyPostsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let updateNewPostText = (text) => {
//                         store.dispatch(onPostChangeActionCreator(text));
//                     }
//                     return <MyPosts postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} updateNewPostText={updateNewPostText} addNewPost={addPost} />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }


