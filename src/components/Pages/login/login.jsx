import "./login.css";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useContext } from "react";
import { Context } from "../../../context/context";
import { type } from "@testing-library/user-event/dist/type";
import axios from "axios";
export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();
  const { dispatch, isfetching } = useContext(Context);
  const handlesubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        username: userRef.current.value,
        password: passwordRef.current.value,
      });

      dispatch({ type: "LOGIN_SUCESS", payload: res.data });
    } catch (error) {
      dispatch({ type: "LOGIN_fAILURE" });
    }
  };
  return (
    <div className="login">
      <form className="loginform" onSubmit={handlesubmit}>
        <span className="logintitle">Login</span>
        <label>username</label>
        <input
          type="text"
          className="logininput"
          placeholder="enter username..."
          ref={userRef}
        />
        <label>password</label>
        <input
          type="password"
          className="logininput"
          placeholder="enter password"
          ref={passwordRef}
        />
        <button className="loginbutton" disabled={isfetching}>
          Login
        </button>
        <button className="Registerbutton" type="submit">
          <Link className="link" to="/register">
            Register
          </Link>
        </button>
      </form>
    </div>
  );
}
