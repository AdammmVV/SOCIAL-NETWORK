import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export type AddMessageFormDataType = {
    dialogMessage: string
}
export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component='textarea' name='dialogMessage' placeholder='Enter new message'/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}
export const AddMessageWithForm = reduxForm<AddMessageFormDataType>({
    form: 'addMessage'
})(AddMessageForm)