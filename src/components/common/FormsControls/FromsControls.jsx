import React from 'react';
import s from './FormControls.module.css';

export const Textarea = ({ input, meta, ...props }) => {

    const error = meta.touched && meta.error;

    return (
        <div className={s.formControl + " " + (error ? s.error : "")}>
            <div>
                <textarea {...input} {...props} />
            </div>
            <div>
                {error && <span>{meta.error}</span>}
            </div>
        </div>
    )
}

export const Input = ({ input, meta, ...props }) => {

    const error = meta.error && meta.touched;

    return (
        <div className={s.formControl + " " + (error ? s.error : "")}>
            <div>
                <input {...input} {...props} />
            </div>
            <div>
                {error && <span>{meta.error}</span>}
            </div>
        </div>
    )
}