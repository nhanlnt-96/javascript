import React, { useState } from 'react';
import '../App.css';

const DateOfBirth = () => {
    return (
        <div className="login-block">
            <p>Birthday:</p>
            <input type="date" placeholder="dd/mm/yyyy" />
            <div className="login-btn">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default DateOfBirth;