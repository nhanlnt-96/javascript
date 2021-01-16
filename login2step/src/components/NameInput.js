import React, { useState } from 'react';
import '../App.css';

const NameInput = ({ setFname, setLname, nextBtn }) => {
    const firstNameInput = (e) => {
        setFname(e.target.value)
    }

    const lastNameInput = (e) => {
        setLname(e.target.value)
    }

    return (
        <div className="login-block">
            <p>Name:</p>

            <input
                type="text"
                placeholder="First name..."
                onChange={firstNameInput} />

            <input
                type="text"
                placeholder="Last name..."
                onChange={lastNameInput} />

            <div className="login-btn">
                <button onClick={nextBtn}>Next</button>
            </div>
        </div>
    );
}

export default NameInput;