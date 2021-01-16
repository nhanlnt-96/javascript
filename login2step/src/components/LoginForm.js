import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import '../App.css';
import ContactInfo from './ContactInfo';
import DateOfBirth from './DateOfBirth';
import LoginInfo from './LoginInfo';
import NameInput from './NameInput';

const LoginForm = () => {
    const [fname, setFname] = useState("");
    const [lname, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [dob, setDob] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    let movingLeft = 0;
    const nextBtn = () => {
        const movingContainer = document.getElementById('moving-container')
        movingLeft -= 100;
        movingContainer.style.left = `${movingLeft}%`
    }

    const prevBtn = () => {
        const movingContainer = document.getElementById('moving-container')
        movingLeft += 100;
        movingContainer.style.left = `${movingLeft}%`
    }

    return (
        <div className="login-form">
            <div className="login-container">
                <div className="login-content" id="moving-container">
                    <NameInput
                        fname={fname}
                        setFname={setFname}
                        lname={lname}
                        setLname={setLname}
                        nextBtn={nextBtn} />

                    <ContactInfo
                        setEmail={setEmail}
                        setPhone={setPhone}
                        nextBtn={nextBtn}
                        prevBtn={prevBtn} />

                    <DateOfBirth
                        setDob={setDob}
                        nextBtn={nextBtn}
                        prevBtn={prevBtn} />

                    <LoginInfo
                        setUsername={setUsername}
                        setPassword={setPassword}
                        prevBtn={prevBtn} />
                </div>
            </div>
        </div>
    );
}

export default withRouter(LoginForm);