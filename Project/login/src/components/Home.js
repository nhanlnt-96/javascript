import React from 'react';
import { withRouter } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <h1>Home page</h1>
            <button>Logout</button>
        </div>
    );
}

export default withRouter(Home);