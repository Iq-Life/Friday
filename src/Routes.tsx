import React from 'react'
import {Redirect, Route, Switch} from "react-router-dom";
import Error404 from "./pages/Error404";
import {Registration} from "./pages/Registration";
import {Login} from "./pages/Login";
import {EnteringANewPassword} from "./pages/EnteringANewPassword";
import {PasswordRecovery} from "./pages/PasswordRecovery";
import {Profile} from "./pages/Profile";
import {Testing} from "./pages/Testing";


export const PATH = {
    REGISTRATION: '/registration',
    LOGIN: '/login',
    PROFILE: '/profile',
    PASSWORD_RECOVERY: '/password-recovery',
    ENTERING_A_NEW_PASSWORD: '/entering-a-new-password',
    TESTING: '/testing'
}

function Routes() {
    return (
        <div>
            <Switch>
                <Route path={'/'} exact render={() => <Redirect to={PATH.REGISTRATION}/>}/>

                <Route path={PATH.REGISTRATION} render={() => <Registration/>}/>
                <Route path={PATH.LOGIN} render={() => <Login/>}/>
                <Route path={PATH.PASSWORD_RECOVERY} render={() => <PasswordRecovery/>}/>
                <Route path={PATH.ENTERING_A_NEW_PASSWORD} render={() => <EnteringANewPassword/>}/>
                <Route path={PATH.PROFILE} render={() => <Profile/>}/>
                <Route path={PATH.TESTING} render={() => <Testing/>}/>

                <Route render={() => <Error404/>}/>
            </Switch>
        </div>
    )
}

export default Routes