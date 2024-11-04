import  React from "react";
import { useState } from 'react';

export default function LogiPage(){
   
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
        </>
    )
}
