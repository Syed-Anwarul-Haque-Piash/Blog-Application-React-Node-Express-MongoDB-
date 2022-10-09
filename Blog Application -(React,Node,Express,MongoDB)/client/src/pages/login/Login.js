import axios from 'axios';
import { useContext, useRef } from "react";
import { Link } from 'react-router-dom';
import { Context } from '../../context/Context';
import './login.css';

const Login = () => {
    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch({ type: "LOGIN_START" });
        try {
          const res = await axios.post("http://localhost:5000/api/auth/login", {
            username: userRef.current.value,
            password: passwordRef.current.value,
          });
          dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
        } catch (err) {
          dispatch({ type: "LOGIN_FAILURE" });
        }
      };
      
    return (
        <div className='login'>
            <span className="loginTitle">Login</span>
            <form  className="loginForm" onSubmit={handleSubmit}>
                <label>Username</label>
                <input className="loginInput" type="text"placeholder='Enter Your Username' ref={userRef}/>
                <label>Password</label>
                <input  className="loginInput" type="password" placeholder='Enter Your Password'ref={passwordRef} />
                <button className="loginBtn" type='submit' disabled={isFetching}>Login</button>
            </form>
            <button className="loginRegisterBtn">
                <Link className='link' to='/register'>Register</Link>
            </button>
        </div>
    );
};

export default Login;