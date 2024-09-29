import React,{useState} from "react";
import api from '../axiosConfig';

const Signup = () => {
    const [username ,setUsername]= useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('/users/register',{username,email,password});
            alert('User Registered Successfully');
        }
        catch (error)
        {
            console.error(error);
        }
    };

    return(
        <form>
            <label>username : </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>email : </label>
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <label>password : </label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Sign Up</button>
        </form>
    );



};

export default Signup;