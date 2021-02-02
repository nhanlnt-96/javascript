import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const ProtectRoute = ({ component: Component, ...rest }) => {
    const isLogged = useSelector(state => state.isLogged);
    return (
        <Route {...rest} render={(props) => {
            if (isLogged) {
                return <Component />;
            } else {
                return (<Redirect to={{ pathname: "/", state: { from: props.location } }} />);
            }
        }} />
    );
}

export default ProtectRoute;