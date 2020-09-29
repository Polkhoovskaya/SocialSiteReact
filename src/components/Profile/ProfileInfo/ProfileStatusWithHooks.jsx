import React, { useEffect, useState } from 'react';

const ProfileStatusWithHooks = (props) => {

    let stateWithSetState = useState(false);
    let [editMode, setEditMode] = stateWithSetState;
    let [status, addStatus] = useState(props.status);

    useEffect(() => {
        addStatus(props.status);
    }, [props.status]);

    const activateMode = () => {
        setEditMode(true);
    }
 
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        addStatus(e.currentTarget.value);
    }

    return (
        <div>
            {
                !editMode ?
                    <p onDoubleClick={activateMode} >{props.status}</p>
                    : <input autoFocus onChange={onStatusChange} onBlur={deactivateEditMode} value={status} />
            }
        </div>
    )
}

export default ProfileStatusWithHooks;