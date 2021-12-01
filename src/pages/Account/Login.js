import React, { createContext, useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAuth,  GoogleAuthProvider,onAuthStateChanged, signInWithPopup } from "firebase/auth";
import firebaseInitalize from '../../Firebase/FirebaseInit';
import UseFirebase from '../../Firebase/UseFirebase';
import UseAuth from '../../Firebase/UseAuth';


firebaseInitalize();

const Login = () => {

    const { handaleGoogleSign } = UseAuth();


    return (
    
       <section className="d-flex justify-content-center mt-5 pt-5">
            <aside className="card" style={{width:"450px",padding:"50px",height:"400px"}}>
                <h3 className="text-center mb-4 mt-5">Login With</h3>
               
                <button onClick={handaleGoogleSign} style={{width:"350px",display:"flex",justifyContent:"space-around",alignItems:"center",borderRadius:"25px",padding:"7px",fontWeight:"500",marginBottom:"20px",border:"1px solid grey"}}> <i class="fab fa-google"></i> Continue with Google</button>
               
                <small className="text-center fw-bold"> Don't have an account? <Link>Create an account</Link></small>
            </aside>
        </section>
    );
};

export default Login;