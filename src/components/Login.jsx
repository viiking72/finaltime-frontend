import React, { useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
const Login = () => {
    const history=useNavigate();
    const [email,setEmail]= useState('')

    async function submit(e){
        e.preventDefault();
        try{
            await axios.post("http://localhost:3001/login",{email})
            .then(res=>{
                if(res.data=="exist"){
                    history("/friends",{state:{id:email}})
                }else if(res.data=="notexist"){
                    alert("Yarr dost hone ki acting mat kar")
                }
            })
            .catch(e=>{
                alert("Kripya codes ki jaanch karee")
                console.log(e)
            })
        }catch(err){
            console.log("Kripya codes ki jaanch kare")
        }
    }
  return (
    <div>
        <h1>Kripya apna naam enter karke check kare</h1>
        <form action="POST">
            <input type="email" placeholder="apna email enter kare" onChange={(e)=>{setEmail(e.target.value)}} />
            <input type="submit" onClick={submit}/>
        </form>
        <br />
        <Link to="/">HomePage</Link>
    </div>
  )
}
export default Login
