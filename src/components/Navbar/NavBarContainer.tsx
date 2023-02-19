import React from "react";
import {NavBar} from "./NavBar";
import {StoreContext} from "../../StoreContext";

export const NavBarContainer = () => {

    return <StoreContext.Consumer>
        {
            (store) => {
                let state = store.getState()
                return <NavBar friend={state.navBar.nav}/>
            }
        }
    </StoreContext.Consumer>
}