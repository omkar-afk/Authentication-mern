
import React, { useState } from "react"
import axios from "axios"
import { useNavigate, Link } from "react-router-dom"

function Signup(){
    const navigate = useNavigate(); 
    const [username , setUsername]= useState("");
    const [password, setPassword]  = useState("");
    async function save(e){
        e.preventDefault();
            try {
                const res = await axios.post("http://localhost:3000/save", { username, password });
                if (res.data.mssg === "exist") {
                    alert("User already exists");
                } else {
                    navigate('/home')
                }
            } catch (error) {
                console.error("Error:", error);
                alert("An error occurred while saving the user");
            }      
    }
    return <div>
        <h1>Signup</h1>
        <form action="http://localhost:5173/signup" method="POST">
            <input onChange = {(e)=>{setUsername(e.target.value)}} placeholder="username"></input>
            <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"></input>
            <button onClick={save}>Submit</button>

        </form>

        <br />
            <p>OR</p>
            <br />

            <Link to="/">Login Page</Link>
    </div>
}

export default Signup;