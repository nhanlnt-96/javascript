import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Home = ({ setIsAuth }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const userInput = (e) => {
        setUsername(e.target.value)
    };

    const passInput = (e) => {
        setPassword(e.target.value)
    };

    const submitBtn = () => {
        if (username === "admin" && password === "admin") {
            setIsAuth(true)
        } else {
            console.log("wrong user or pass");
        }
    }

    return (
        <div>
            <input type="text" placeholder="username" onChange={userInput} />
            <input type="password" placeholder="password" onChange={passInput} />
            <button onClick={submitBtn}><Link to="/profile">Submit</Link></button>
        </div>
    );
}

export default Home;