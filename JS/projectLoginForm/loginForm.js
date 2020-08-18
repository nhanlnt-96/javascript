function loginForm() {
    let name = String;
    let dob = Date;
    let phoneNumber = Number;
    let email = String;
    //get the value of the input field with id
    name = document.getElementById("userName").value;
    dob = document.getElementById("dateOfBirth").value;
    phoneNumber = document.getElementById("phone").value;
    email = document.getElementById("email").value;
    //get result
    if(name,dob,phoneNumber,email) {
        document.getElementById("userResult").innerHTML = `Your username is ${name}`;
        document.getElementById("dobResult").innerHTML = `Your date of birth is ${dob}`;
        document.getElementById("phoneResult").innerHTML = `Your phone number is ${phoneNumber}`;
        document.getElementById("mailResult").innerHTML = `Your email is ${email}`;
    } else {
        document.getElementById("fail").innerHTML = 'Please fill the form.';
    }
    
}
