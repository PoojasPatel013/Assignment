import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Auth.css';

const Login = () => {
  const [userNameOrEmail, SetUserNameOrEmail] = useState("")
  const [password, Setpassword] = useState("")
  const [error, setError] = useState(null)
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log(userNameOrEmail, password)
    e.preventDefault();
    // Handle login logic here
    const response = await fetch("http://localhost:8001/users/login", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ userNameOrEmail, password })
    });
    const data = await response.json()
    if(response.ok)    {
      localStorage.setItem('token',data.token);
      // console.log(data)
      navigate("/")
      // alert("Successfull...")
    }else {
      console.log(data)
      setError(data.message)
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <h2>Login</h2>
        {error && <p>{error || "Error encountered"}</p>}
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="usernameOrEmail">Username / Email</label>
            <input type="text" id="usernameOrEmail" value={userNameOrEmail} onChange={(e) => SetUserNameOrEmail(e.target.value)} required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password"
              value={password} onChange={(e) => Setpassword(e.target.value)}
              required />
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  );
};

export default Login;