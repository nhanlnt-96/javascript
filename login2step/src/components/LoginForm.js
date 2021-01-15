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
    const [isEmpty, setIsEmpty] = useState(false);

    let movingLeft = 0;
    const nextBtn = () => {
        const movingContainer = document.getElementById('moving-container')
        movingLeft -= 100;

        (fname != "") ? movingContainer.style.left = `${movingLeft}%` : setIsEmpty(true)
        (lname != "") ? movingContainer.style.left = `${movingLeft}%` : setIsEmpty(true)
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
                        isEmpty={isEmpty}
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