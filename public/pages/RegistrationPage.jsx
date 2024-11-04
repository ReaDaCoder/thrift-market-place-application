import React, {useState, useEffect} from 'react';
import {app, database} from '../firebaseConfig';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from 'firebase/firestore';

export default function RegistrationPage(){
  let auth = getAuth();
  const [data, setData] = useState('');
  const collectionRef = collection(database, 'users');

  const [user, setUser] = useState({
    name: "",
    surname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  function handleInputChange(ev) {
    const { name, value } = ev.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  }

  function handleInput(event){
    let newInput = {[event.target.name]: event.target.value};

    setData({...data, ...newInput});
  }

  function handleSubmit(event){
     event.preventDefault();
     createUserWithEmailAndPassword(auth, data.email, data.password).then((response) =>{
      console.log("User successfully created:", response.user);
    
    })

    addDoc(collectionRef, {
      name: user.name,
      surname: user.surname,
      email: user.email,
      password: user.password
    })
    .then(() => {
      alert('Data Added')
    })
    .catch((err) =>{
      alert(err.message)
    });
  }

  function getData(){
    getDocs(collectionRef)
    .then((response) => {
      console.log(response.data.map((item) => {
        return {...item.data(), id: item.id};
      }))
    });
  }

  function updateData(){
    const docToUpdate = doc(database, "users")

  }
    return(
        <div>
          <h1>Sign up</h1>
            <div className="signup-box">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="First Name"
          value={user.name}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="text"
          name="surname"
          placeholder="Last Name"
          value={user.surname}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={user.email}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={user.password}
          onChange={handleInputChange}
          required
        /><br/>
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={user.confirmPassword}
          onChange={handleInputChange}
          required
        />
        <div className="card">
                                <img src="https://i0.wp.com/digitalhealthskills.com/wp-content/uploads/2022/11/3da39-no-user-image-icon-27.png?fit=500%2C500&ssl=1" alt="User" width="100px"/>
                                <br/>
                                <input type="file" accept="image/JPEG, image/png, image/jpg" id="input-file" />
                                <br/>
                                <label htmlFor="input-file" id="update-img">Update</label>
                            </div>
                            <br/>
        <button type="submit" onClick={handleSubmit}>Sign Up</button>
        
      </form>
    </div>
        </div>
    );
}