import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getUser, ProfileInfoType} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";

type ProfileAPIContainerPropsType = MapStateToPropsType & {
    getUser: (userId: string) => void
}

type RoutParams = {
    userId: string
}

export class ProfileAPIContainer extends React.Component<RouteComponentProps<RoutParams> & ProfileAPIContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || '28108'
        this.props.getUser(userId)
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

export const ProfileContainer = connect(mapStateToProps, {getUser})(ProfileWithRouterContainer)