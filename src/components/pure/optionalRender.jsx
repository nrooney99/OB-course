import React, { useState } from 'react';


const LoginButton = ({loginAction}) => {
    return(
        <button onClick={loginAction}>Login</button>
    )
}

const LogoutButton = ({logoutAction}) => {
    return(
        <button onClick={logoutAction}>Logout</button>
    )
}

const OptionalRender = () => {
    const [access, setAccess] = useState(true);
    const [nMessages, setNMessages] = useState(0);
    const loginAction = () => setAccess(true);
    const logoutAction = () => setAccess(false);
    const addMessages = () => setNMessages(nMessages+1);
    return (
        <div>
            { access 
            ? <LogoutButton logoutAction={logoutAction} /> 
            : <LoginButton loginAction={loginAction} /> }
            { nMessages > 0 && <p>You have {nMessages} new messages.</p> }
            <button onClick={addMessages}>Add new message</button>
        </div>
    )
}

export default OptionalRender