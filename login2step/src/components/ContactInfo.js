import React, { useState } from 'react';
import '../App.css';

const ContactInfo = () => {
    return (
        <div className="login-block">
            <p>Contact Info:</p>
            <input type="mail" placeholder="Email..." />
            <input type="number" placeholder="Phone..." />
            <div className="login-btn">
                <button>Previous</button>
                <button>Next</button>
            </div>
        </div>
    );
}

export default ContactInfo;