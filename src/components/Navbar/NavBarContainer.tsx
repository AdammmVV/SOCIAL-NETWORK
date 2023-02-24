import React from "react";
import {NavBar} from "./NavBar";
import {connect} from "react-redux";
import {AppStateType} from "../../redux/redux-store";
import {Dispatch} from "redux";
import {InitialStateNavType} from "../../redux/navBar-reducer";

type mapStateToPropsType = {
    friend: InitialStateNavType
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        friend: state.navBar
    }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
}

export const NavBarContainer = connect(mapStateToProps, mapDispatchToProps)(NavBar)