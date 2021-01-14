import React, { useState } from 'react';
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

    const nextBtn = () => {
        const movingContainer = document.getElementById("moving-container");
        const width = movingContainer.offsetWidth;
        const movingWidth = -100;

        movingContainer.style.left = `${movingWidth}%`
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
                        setPhone={setPhone} />

                    <DateOfBirth
                        setDob={setDob} />

                    <LoginInfo
                        setUsername={setUsername}
                        setPassword={setPassword} />
                </div>
            </div>
        </div>
    );
}

export default LoginForm;