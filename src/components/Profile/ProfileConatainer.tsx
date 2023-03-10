import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileInfoType, setIsFetching, setProfileInfo} from "../../redux/profile-reducer";

type ProfileAPIContainerPropsType = {
    profileInfo: ProfileInfoType
    isFetching: boolean
    setProfileInfo: (profileInfo: ProfileInfoType) => void
    setIsFetching: (isFetching: boolean) => void
}

export class ProfileAPIContainer extends React.Component<ProfileAPIContainerPropsType> {
    componentDidMount() {
        this.props.setIsFetching(true)
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/28317')
            .then(require => {
                this.props.setIsFetching(false)
                this.props.setProfileInfo(require.data)
                console.log(require.data)
            })
    }
    render() {
        return (
            <div>
                <Profile profileInfo={this.props.profileInfo} isFetching={this.props.isFetching}/>
            </div>
        );
    }
}

type MapStateToPropsType = {
    profileInfo: ProfileInfoType
    isFetching: boolean
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching
    }
}

export const ProfileContainer = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileAPIContainer)