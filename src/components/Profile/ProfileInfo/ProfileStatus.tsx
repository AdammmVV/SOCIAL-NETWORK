import React, {ChangeEvent} from "react";

type ProfileStatusPropsType = {
    profileStatus: string
    updateStatus: (newStatus: string) => void
}

type StateType = {
    editMode: boolean
    title: string
}

export class ProfileStatus extends React.Component<ProfileStatusPropsType> {
    state = {
        editMode: false,
        title: this.props.profileStatus
    }

    componentDidUpdate(prevProps: Readonly<ProfileStatusPropsType>, prevState: Readonly<StateType>) {
        if (prevProps.profileStatus !== this.props.profileStatus) {
            this.setState({
                title: this.props.profileStatus
            })
        }
    }

    activeInput = () => {
        this.setState({
            editMode: true
        })
    }

    deactiveInput = () => {
        this.props.updateStatus(this.state.title)
        this.setState({
            editMode: false
        })
    }

    onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        this.setState({
            title: e.currentTarget.value
        })
    }

    render() {
        return (
            <div>
                {this.state.editMode
                    ? <input autoFocus onBlur={this.deactiveInput} onChange={this.onChangeHandler} value={this.state.title}/>
                    : <span onDoubleClick={this.activeInput}>{this.props.profileStatus ? this.props.profileStatus : 'введите'}</span>
                }
            </div>
        )
    }
}