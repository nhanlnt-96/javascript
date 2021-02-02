import React from 'react';



const Home = () => {
    

    return (
        <form>
            <input type="text" placeholder="username" required={true} />
            <input type="password" placeholder="password" required={true} />
            <button onClick={() => dispatch(signIn())}>Sign in</button>
            {isLogged ? <h3>Signed in</h3> : ""}
        </form>
    );
};

export default Home;