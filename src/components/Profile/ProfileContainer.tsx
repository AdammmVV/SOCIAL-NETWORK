import React from "react";
import {Profile} from "./Profile";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {getStatus, getUser, ProfileInfoType, updateStatus} from "../../redux/profile-reducer";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

type ProfileAPIContainerPropsType = MapStateToPropsType & {
    getUser: (userId: string) => void
    getStatus: (userId: string) => void
    updateStatus: (newStatus: string) => void
}

type RoutParams = {
    userId: string
}

type MapStateToPropsType = {
    profileInfo: ProfileInfoType
    isFetching: boolean
    profileStatus: string
    userId: number | null
}

export class ProfileAPIContainer extends React.Component<RouteComponentProps<RoutParams> & ProfileAPIContainerPropsType> {
    componentDidMount() {
        let userId = this.props.match.params.userId || this.props.userId + ''
        this.props.getUser(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <div>
                <Profile profileInfo={this.props.profileInfo}
                         profileStatus={this.props.profileStatus}
                         isFetching={this.props.isFetching}
                         updateStatus={this.props.updateStatus}/>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => {
    return {
        profileInfo: state.profilePage.profileInfo,
        isFetching: state.profilePage.isFetching,
        profileStatus: state.profilePage.profileStatus,
        userId: state.auth.id
    }
}

export const ProfileContainer = compose<React.ComponentType>(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, {getUser, getStatus, updateStatus})
)(ProfileAPIContainer)