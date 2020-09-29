import React from 'react';
import { addMessageActionCreator } from '../../redux/messagesPage-reducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { compose } from 'redux';

let mapStateToProps = (state) => {
    return {
        dialogsData: state.messagesPage.dialogsData,
        messagesData: state.messagesPage.messagesData,
    };
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNewMessage: (formData) => {
            dispatch(addMessageActionCreator(formData));
        }
    };
}

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);
