import "./Signup.css"; 

function Signup() {
  return (
    <div className="signup">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Full Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <input type="password" placeholder="Confirm Password" />
        <input type="number" placeholder="Phone Number" />
        <input type="text" placeholder="Address" />
        <input type="date" placeholder="Date of Birth" />
        <input type="text" placeholder="City" />
        <input type="text" placeholder="State" />
        <input type="text" placeholder="Country" />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}

export default Signup;
