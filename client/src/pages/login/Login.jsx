import axios from "axios";
import { useRef, useContext } from "react";
import { Context } from "../../context/Context";
import "./login.css";

export default function Login() {
  const userRef = useRef();
  const passwordRef = useRef();

  const { dispatch, isFetching,error } = useContext(Context);


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "LOGIN_START" });
    try {
      const res = await axios.post("/auth/login", {
        email: userRef.current.value,
        password: passwordRef.current.value,
      });
      dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      
    } catch (err) {
      dispatch({ type: "LOGIN_FAILURE" });
    }
  };
  return (
    <div class="content-wrapper">
      <div class="content">
        <div class="signup-wrapper shadow-box">
          <div class="company-details ">
            <div class="shadow"></div>
            <div class="wrapper-1">
              <div class="logo">
                <div class="icon-food"></div>
              </div>
              <h1 class="title">BLOG ITLIFE</h1>
              <div class="slogan"></div>
            </div>
          </div>
          <div class="signup-form ">
            <div class="wrapper-2">
              <div class="form-title">LOGIN</div>
              <div class="form">
                <form onSubmit={handleSubmit}>
                 <p>{error}</p> 
                  <p class="content-item">
                    <label>
                      <b>Email</b>{" "}
                    </label>
                    <input
                      className="loginInput"
                      type="text"
                      placeholder="Enter your email...."
                      ref={userRef}
                    ></input>{" "}
                  </p>
                  <p class="content-item">
                    <label>
                      <b>Password</b>
                    </label>
                    <input
                      className="loginInput"
                      type="password"
                      placeholder="Enter your password...."
                      ref={passwordRef}
                    ></input>
                  </p>
                  <button
                    className="registerLoginButton"
                    type="submit"
                    disabled={isFetching}
                  > 
                    Login
                  </button>
                  <p class="messageLogin">
                    Not registered? <a href="/register">Create an account</a>
                  </p>
                </form>
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div>
  );
}
