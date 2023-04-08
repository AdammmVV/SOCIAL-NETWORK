import React from "react";
import {WrappedFieldProps} from "redux-form/lib/Field";
import s from './FormsControls.module.css'

const FormControls: React.FC<WrappedFieldProps> = ({input, meta, children, ...restProps}) => {
    const error = meta.touched && meta.error
    return (
        <div className={`${error ? s.errorTextarea : ''} ${s.textarea}`}>
            {children}
            {error && <span className={s.spanError}>{meta.error}</span>}
        </div>
    )
}

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControls {...props}><textarea {...input}{...restProps}/></FormControls>
}

export const Input: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return <FormControls {...props}><input {...input}{...restProps}/></FormControls>
}