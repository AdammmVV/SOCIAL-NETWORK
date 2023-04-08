import React from "react";
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import {Textarea} from "../common/formsControls/FormsControls";
import {maxLength, required} from "../../utils/validators/validators";

export type AddMessageFormDataType = {
    dialogMessage: string
}

const maxLength15 = maxLength(15)

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormDataType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} name='dialogMessage' placeholder='Enter new message' validate={[required, maxLength15]}/>
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