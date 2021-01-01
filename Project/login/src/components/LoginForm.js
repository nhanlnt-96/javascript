import React, { useState } from 'react';
import '../App.css'

const LoginForm = ({ isAuth, setIsAuth }) => {
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
            console.log("wrong")
            console.log(isAuth)
        }
    }
    return (
        <div className="form-login-component">
            <input type="text" placeholder="username" onChange={userInput} />
            <input type="password" placeholder="password" onChange={passInput} />
            <button onClick={loginBtn}>Login</button>
        </div>
    );
}

export default LoginForm;