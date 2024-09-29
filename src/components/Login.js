import React,{useState} from "react";
import api from '../axiosConfig';

const Login = () => {
    const [username,setUsername] = useState('');
    const [password,setPassword] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const response= await api.post('/users/login', {username,password});
        }
        catch(error)
        {
            console.error(error);
            alert('login failed');
        }
    };

    return(
        <form>
            <label>Username : </label>
            <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
            <label>Password</label>
            <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
            <button type="submit">Login</button>
        </form>
    );
};

export default Login;