import React from "react";
import {Profile} from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {ProfileInfoType, setIsFetching, setProfileInfo} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileAPIContainerPropsType = MapStateToPropsType & {
    setProfileInfo: (profileInfo: ProfileInfoType) => void
    setIsFetching: (isFetching: boolean) => void
}

type RoutParams = {
    userId: string
}

export class ProfileAPIContainer extends React.Component<RouteComponentProps<RoutParams> & ProfileAPIContainerPropsType> {
    componentDidMount() {
        debugger
        let userId = this.props.match.params.userId || 28108
        this.props.setIsFetching(true)
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userId}`)
            .then(require => {
                this.props.setIsFetching(false)
                this.props.setProfileInfo(require.data)
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
    userId: number
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching,
        userId: state.auth.id
    }
}

let ProfileWithRouterContainer = withRouter(ProfileAPIContainer)

export const ProfileContainer = connect(mapStateToProps, {setProfileInfo, setIsFetching})(ProfileWithRouterContainer)