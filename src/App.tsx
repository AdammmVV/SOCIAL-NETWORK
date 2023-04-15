import React from 'react';
import './App.css';
import {Route} from "react-router-dom";
import {Music} from "./components/Music/Music";
import {News} from "./components/News/News";
import {Setting} from "./components/Setting/Setting";
import {DialogsContainer} from "./components/Dialogs/DialogsContainer";
import {NavBarContainer} from "./components/Navbar/NavBarContainer";
import {UsersContainer} from "./components/Users/UsersContainer";
import {ProfileContainer} from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import {LoginWidthConnect} from "./components/Login/Login";
import {connect} from "react-redux";
import {initializedAT} from "./redux/app-reducer";
import {Preloader} from "./components/common/preloader/Preloader";
import {AppStateType} from "./redux/redux-store";

class App extends React.Component<AppPropsType> {
    componentWillMount() {
        this.props.initializedAT()
    }
    render() {
        if(!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className="app-wrapper">
                <HeaderContainer/>
                <NavBarContainer/>
                <div className='app-wrapperContent'>
                    <Route path={'/dialogs'} component={DialogsContainer}/>
                    <Route path={'/profile/:userId?'} component={ProfileContainer}/>
                    <Route path={'/news'} component={News}/>
                    <Route path={'/music'} component={Music}/>
                    <Route path={'/settings'} component={Setting}/>
                    <Route path={'/users'} component={UsersContainer}/>
                    <Route path={'/login'} component={LoginWidthConnect}/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
    initialized: state.app.initialized
})

export default connect(mapStateToProps, {initializedAT})(App)

//types
type AppPropsType = MapStateToPropsType & {
    initializedAT: () => void
}
type MapStateToPropsType = {
    initialized: boolean
}
