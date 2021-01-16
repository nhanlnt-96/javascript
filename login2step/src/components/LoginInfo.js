import React, { useState } from 'react';
import '../App.css';

const LoginInfo = ({ prevBtn }) => {
    const [isSubmit, setIsSubmit] = useState(false)
    const submitBtn = () => {
        setIsSubmit(true)
    }
    return (
        <div className="login-block">
            <p>Login Info:</p>
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <div className="login-btn">
                <button onClick={prevBtn}>Previous</button>
                <button onClick={submitBtn}>Submit</button>
            </div>
            <h1>{(isSubmit) ? "Done!" : ""}</h1>
        </div>
    );
}

export default LoginInfo;