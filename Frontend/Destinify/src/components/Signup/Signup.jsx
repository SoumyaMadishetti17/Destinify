import { useDispatch, useSelector } from "react-redux";
import "./Signup.css"; 
import { signUpCall } from "../../features/userLogedIn/userLogedInSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../Loader/Loader";

function Signup() {

  const [formValue, setFormValue] = useState({})
  const dispatch = useDispatch()

  const state = useSelector((state)=>state.user)
  const navigate = useNavigate()

  const handleSubmit = async(e) => {
    debugger;
    e.preventDefault()
    try{
      console.log(formValue)
      const res = await dispatch(signUpCall({ url: 'auth/signup', item: formValue })).unwrap();
      console.log(res)
      if(res.message == "User created"){
        navigate('/login')
      }
    }catch(err){

    }
  }

  const handleForm = (e) => {
    setFormValue((prev) => ({...prev, [e.target.name] : e.target.value}))
  }
  return (
    <div className="signup">
      { state.loading? <Loader ></Loader>: <></>}
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Full Name" name="name"  onChange={handleForm}/>
        <input type="email" placeholder="Email" name="email" onChange={handleForm}/>
        <input type="password" placeholder="Password" name="password" onChange={handleForm}/>
        {/* <input type="password" placeholder="Confirm Password" name="confirm" onChange={handleForm}/>
        <input type="number" placeholder="Phone Number" name="" onChange={handleForm}/>
        <input type="text" placeholder="Address" name="" onChange={handleForm}/>
        <input type="date" placeholder="Date of Birth" name="" onChange={handleForm}/>
        <input type="text" placeholder="City" name="" onChange={handleForm}/>
        <input type="text" placeholder="State" name="" onChange={handleForm}/>
        <input type="text" placeholder="Country" name="" onChange={handleForm}/> */}
        <button type="submit">Sign Up</button>
        <p style={{textAlign:"end",cursor:"pointer"}} onClick={()=>{navigate('/login')}}>Log In</p>
      </form>
    </div>
  );
}

export default Signup;
