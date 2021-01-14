import React, { useState } from 'react';
import '../App.css';

const LoginInfo = () => {
    return (
        <div className="login-block">
            <p>Login Info:</p>
            <input type="text" placeholder="Username..." />
            <input type="password" placeholder="Password..." />
            <div className="login-btn">
                <button>Previous</button>
                <button>Submit</button>
            </div>
        </div>
    );
}

export default LoginInfo;