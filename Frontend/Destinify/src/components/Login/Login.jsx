import { useEffect, useState } from "react";
import "./Login.css";
import { addItem } from "../../features/REST/restSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginCall } from "../../features/userLogedIn/userLogedInSlice";
import Loader from "../Loader/Loader";
import Swal from 'sweetalert2'

function Login() {
    const [inputValues, setInputValues] = useState({ email: "", password: "" })
    let dispatch = useDispatch()
    const navigate = useNavigate()
    const state = useSelector((state)=>state.user)
    const handelInputChanges = (e) => {
        setInputValues((prev) => ({ ...prev, [e.target.name]: e.target.value }))
    }

    useEffect(()=>{
        console.log(state)
    },[])

    const fireSwal = () => {
        Swal.fire({
            title: 'Error',
            html: `
                <p> Worng Email Id or Password. </p>
            `,
            
            icon: 'error'
        })
    }


    const handelSubmit = async (e) => {
        
        e.preventDefault();
        console.log('Input Values:', inputValues);
        
        try {
            const res = await dispatch(loginCall({ url: 'auth/login', item: inputValues })).unwrap();
            console.log('Login Successful:', res);

            localStorage.setItem("token",res.token)
            navigate('/')
        } catch (err) {
            if (err.response) {
                console.error('Error Response:', err.response.data);
                
            } else {
                console.error('Error:', err.message);
            }
            fireSwal()
        }
    };

    return (
        
        <div className="login">
            { state.loading? <Loader ></Loader>: <></>}
            <h2>Login</h2>
            <form onSubmit={handelSubmit}>
                <input type="text" placeholder="Username" name="email" onChange={handelInputChanges} />
                <input type="password" placeholder="Password" name="password" onChange={handelInputChanges} />
                <button type="submit">Log In</button>
                <p style={{textAlign:"end",cursor:"pointer"}} onClick={()=>{navigate('/signup')}}>Sign Up</p>
            </form>
        </div>
    );
}

export default Login;
