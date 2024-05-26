import React, { useState } from 'react'
import { auth } from '../firebase'
import { createUserWithEmailAndPassword } from 'firebase/auth';

const SignUp = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential);
            })
            .catch((error) => {
                console.log(error);
            })
    };

    return ( 

        <div>
            <form onSubmit={signUp}>
                <h1>Sign Up</h1>
                <input type="email" placeholder="Please enter your email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                <input type="password" placeholder="Please enter your password" value={password} onChange={(e)=>setPassword(e.target.value)}></input>
                <button type='submit'>Log In</button>
            </form>
        </div>

     );
}
 
export default SignUp;