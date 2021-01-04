import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({ setIsAuth }) => {
    return (
        <div>
            <h1>Home page</h1>
            <button onClick="btnLogout">Logout</button>
        </div>
    );
}

export default withRouter(Home);