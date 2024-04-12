import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom"
function Signin(){
    const [username , setUsername]= useState("");
    const [password, setPassword]  = useState("");

    const navigate = useNavigate();
    async function check(e){
        e.preventDefault();
        try {
            const res = await axios.post("http://localhost:3000/check", {username,password});
            console.log(res.data);
            if (res.data.mssg === "exist") {
                navigate('/home');
            } else {
                alert("User does not exist");
            }
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while checkin the user");
        }      
}

    return <div>
        <h1>Signin</h1>
        <form method="POST">
            <input onChange = {(e)=>{setUsername(e.target.value)}} placeholder="username"></input>
            <input onChange = {(e)=>{setPassword(e.target.value)}} placeholder="password"></input>
            <button onClick={check}>Submit</button>
        </form>
        <br />
            <p>OR</p>
            <br />

            <Link to="/signup">signup Page</Link>
        
    </div>
}

export default Signin;