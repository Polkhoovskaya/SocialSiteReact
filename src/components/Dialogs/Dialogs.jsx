import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../common/FormsControls/FromsControls';
import { maxLengthCreator, requiredField } from '../../utils/validators/validators';

const maxLength = maxLengthCreator(10);

const DialogsForm = (props) => {

    return <div className={s.main}>
        <div className={s.dialogs}>
            {
                props.dialogsData.map(dialog => <DialogItem name={dialog.name} id={dialog.id} key={dialog.id} />)
            }
        </div>
        <div className={s.messages}>
            {
                props.messagesData.map(message => <Message message={message.message} key={message.id} />)
            }
            <div>
                <form onSubmit={props.handleSubmit}>
                    <Field name={'message'} placeholder={"message"} component={Textarea} validate={[requiredField, maxLength]} />
                    <button >Add message</button>
                </form>
            </div>
        </div>
    </div>
}

const DialogsReduxFrom = reduxForm({ form: 'dialogs' })(DialogsForm);

const Dialogs = (props) => {

    const onSubmit = (formData) => {
        props.addNewMessage(formData);
    }

    return (
        <DialogsReduxFrom {...props} onSubmit={onSubmit} />
    );
}

export default Dialogs;