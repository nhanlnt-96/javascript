import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

const LoginForm = ({ setIsAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userInput = (e) => {
        setUsername(e.target.value);
    }

    const passInput = (e) => {
        setPassword(e.target.value)
    }

    const loginBtn = () => {
        if (username === "admin" && password === "admin") {
            setIsAuth(true)
        } else {
            console.log("username or password is wrong")
        }
    }

    return (
        <div className="form-login-component">
            <input type="text" placeholder="username" onChange={userInput} />
            <input type="password" placeholder="password" onChange={passInput} />
            <button onClick={loginBtn}><Link to="/">Login</Link></button>
        </div>
    );
}

export default LoginForm;