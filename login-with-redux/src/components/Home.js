import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { signIn } from '../actions';


const Home = () => {
    const isLogged = useSelector(state => state.isLogged);
    const dispatch = useDispatch();

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const usernameInput = (e) => {
        setUsername(e.target.value);
    }

    const passwordInput = (e) => {
        setPassword(e.target.value);
    }

    const submitBtn = () => {
        if (username === 'admin' && password === 'Nhan1996##') {
            dispatch(signIn());
        } else {
            console.log("wrong username or password");
        }
    }

    return (
        <form>
            <input type="text" placeholder="username" onChange={usernameInput} required={true} />
            <input type="password" placeholder="password" onChange={passwordInput} required={true} />
            <button onClick={submitBtn}>Sign in</button>
            {isLogged ? <h3>Signed in</h3> : ''}
        </form>
    );
};

export default Home;