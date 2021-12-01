import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from "@firebase/auth";
import { useState } from "react";
import firebaseInitalize from "./FirebaseInit";


firebaseInitalize();

const UseFirebase = () => {
            
  const auth = getAuth();
  const [ user, setUser ] = useState({});

const handaleGoogleSign = () => {

  const googleProvider = new GoogleAuthProvider();
          signInWithPopup(auth,googleProvider)
          .then(result => {
              setUser(result.user)
              
           })
            }

onAuthStateChanged(auth,(user)=>{
  if(user){
    setUser(user)
  }
  else{
    setUser({})
  }

})


return {
    handaleGoogleSign,
    user
}
}
export default UseFirebase;