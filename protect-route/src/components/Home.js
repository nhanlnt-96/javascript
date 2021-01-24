import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';

const Home = ({ history }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const userInput = (e) => {
        setUsername(e.target.value)
    };

    const passInput = (e) => {
        setPassword(e.target.value)
    };

    const submitBtn = () => {
        if (username === "admin" && password === "admin") {
            history.push('/profile');
        } else {
            setErrorMsg("Wrong username or password");
        }
    }

    return (
        <div>
            <input type="text" placeholder="username" onChange={userInput} />
            <input type="password" placeholder="password" onChange={passInput} />
            <button onClick={submitBtn}>Submit</button>
            {errorMsg && <p>{errorMsg}</p>}
        </div>
    );
}

export default withRouter(Home);