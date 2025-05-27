import Login from './Login.jsx'
import Res from './Register.jsx'
import  { useState } from 'react'
import '../css/Welcome.css'


export default function Welcome() {
    const [loginScreen, setLoginScreen] = useState(false);
    return(
<>
     {loginScreen ? 
        <Login  state={loginScreen} setstate={setLoginScreen}/> : 
        <Res state={loginScreen} setstate={setLoginScreen}/>}
        </>
)
}