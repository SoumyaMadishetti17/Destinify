import { useState } from "react";
import "./Login.css";
import { addItem } from "../../features/REST/restSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../features/userLogedIn/userLogedInSlice";

function Login() {
    const [inputValues, setInputValues] = useState({ email: "", password: "" })
    let dispatch = useDispatch()
    const navigate = useNavigate()
    const handelInputChanges = (e) => {
        setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }
    const handelSubmit = async (e) => {
        debugger;
        e.preventDefault();
        console.log('Input Values:', inputValues);
        try {
            const res = await dispatch(loginCall({ url: 'login', item: inputValues })).unwrap();
            console.log('Login Successful:', res);
            localStorage.setItem("token",res.token)
            navigate('/')
        } catch (err) {
            if (err.response) {
                console.error('Error Response:', err.response.data);
            } else {
                console.error('Error:', err.message);
            }
        }
    };

    return (
        <div className="login">
            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Username" name="email" onChange={handelInputChanges} />
                <input type="password" placeholder="Password" name="password" onChange={handelInputChanges} />
                <button type="submit">Log In</button>
            </form>
        </div>
    );
}

export default Login;
