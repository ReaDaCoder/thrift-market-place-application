import  React from "react";
import { useState } from 'react';
import {useNavigation, useNavigate, Link} from "react-router-dom";
import {app, database} from '../firebaseConfig';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

export default function LogiPage(){
  let auth = getAuth();
  const [data, setData] = useState('');
  const navigate = useNavigate();
   
    function handleInput(event){
        let newInput = {[event.target.name]: event.target.value};
    
        setData({...data, ...newInput});
      }
    
      function handleSubmit(event){
        event.preventDefault();
        signInWithEmailAndPassword(auth, data.email, data.password).then((response) =>{
          console.log("User successfully logged in:", response.user);
          navigate('/HomePage');
          //console.log(response.user)
        })
        .catch((err) =>{
          alert(err.message)
        });
      }

    return(
           <>
           <h1>The Thrift Market Place</h1>
           <div className="grid-container-element">
    <div className="grid-child-element purple">Grid Column 1
    <img src="./thrift-img.jpg" className="login-img" width="450px"/>
    </div>
    <div className="grid-child-element green">Grid Column 2
         <label  className="form-label">Email address</label>
<input
    name="email"
    placeholder="type email"
    onChange={(event) => handleInput(event)}
  />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>

    <label  className="password-input">Password</label>
<input
    name="password"
    placeholder="enter password"
    onChange={(event) => handleInput(event)}
  />
<input type="checkbox" className="form-check-input" id="check1" />
<label className="form-check">Check me out</label>
<button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
<Link to="RegistrationPage">Don't have an account : Sign Up</Link> 
    </div>
</div>
        </>
    )
}

