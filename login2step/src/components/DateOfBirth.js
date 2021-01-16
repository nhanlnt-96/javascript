import React, { useState } from 'react';
import '../App.css';

const DateOfBirth = ({ nextBtn, prevBtn }) => {
    return (
        <div className="login-block">
            <p>Birthday:</p>
            <input type="date" placeholder="dd/mm/yyyy" />
            <div className="login-btn">
                <button onClick={prevBtn}>Previous</button>
                <button onClick={nextBtn}>Next</button>
            </div>
        </div>
    );
}

export default DateOfBirth;