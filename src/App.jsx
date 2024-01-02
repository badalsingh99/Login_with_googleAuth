import { useState } from 'react';
import './App.css'
import firebase from './Firebase';
import { getAuth ,signInWithPopup,signOut, GoogleAuthProvider} from "firebase/auth";


function App() {

const [data,setData] = useState({name:"",email:"",url:"",IsLoggedIn:false})

const handleClick =()=>{
        
const provider = new GoogleAuthProvider();
provider.addScope('https://www.googleapis.com/auth/contacts.readonly');
provider.setCustomParameters({
  'login_hint': 'username@gmail.com'
});
const auth = getAuth();
signInWithPopup(auth, provider)
  .then((result) => {
    // This gives you a Google Access Token. You can use it to access the Google API.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    // The signed-in user info.
    const user = result.user;
    // IdP data available using getAdditionalUserInfo(result)
    // ...
    // console.log(user.displayName);
    // console.log(user.email);
    // console.log(user.photoURL);
    setData({name:user.displayName,email:user.email,url:user.photoURL,IsLoggedIn:true})
  }).catch((error) => {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.customData.email;
    // The AuthCredential type that was used.
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
  });
}

const handleLogout = () =>{
  const auth = getAuth();
  signOut(auth).then(() => {
    // Sign-out successful.
    setData({...data,"IsLoggedIn":false})
    })
}

  return (
    <>
     {
      data.IsLoggedIn?
      <>
      <div className='box'>
        <div className='page'>
        <h1>Hello : {data.name}</h1>
        <p>
          {data.email} <br />
          <br />
          <img className='img' src={data.url} alt={data.name} />
        </p>
        <p>
          Your Login Successful !!
        </p>
        <p>
          <input className='btn' type="button" value="Logout" onClick={handleLogout}/>
        </p>
        </div>
       
      </div>
      
      </>
      :
      <>
      <div className='main'>
      <div className='Login-page'>
       <h1>Welcome User</h1>
        <p>Please login to explore further</p>
        <p>
        <input className='btn' type="button" value='login' onClick={handleClick}/>
        </p>
      </div>
      </div>
      
      </>
     }
    </>
  )
}

export default App;
