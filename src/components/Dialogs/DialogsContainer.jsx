import React from 'react';
import { addMessageActionCreator, onMessageChangeActionCreator } from '../../redux/messagesPage-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

// let mapStateToPropsForRedirect = (state) => {
//     return {
//         isAuth: state.auth.isAuth
//     };
// }

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
        // newMessageText: state.messagesPage.newMessageText
        // isAuth: state.auth.isAuth
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (formData) => {
            dispatch(addMessageActionCreator(formData));
        },
        // updateNewMessageText: (text) => {
        //     dispatch(onMessageChangeActionCreator(text));
        // }
    };
}

// let AuthRedirectComponent = withAuthRedirect(Dialogs);
//  = (props) => {
//     if (props.isAuth === false) { return <Redirect to={"/login"} /> }
//     return <Dialogs {...props} />
// }

// AuthRedirectComponent = connect(mapStateToPropsForRedirect)(AuthRedirectComponent);

// const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);

// const DialogsContainer = () => {

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addMessage = () => {
//                         store.dispatch(addMessageActionCreator());
//                     }

//                     let onMessageChange = (text) => {
//                         store.dispatch(onMessageChangeActionCreator(text));
//                     }
//                     return <Dialogs state={state.state} dialogsData={state.messagesPage.dialogsData} messagesData={state.messagesPage.messagesData} newMessageText={state.messagesPage.newMessageText} addNewMessage={addMessage} updateNewMessageText={onMessageChange} />
//                 }
//             }
//         </StoreContext.Consumer>
//     );
// }

