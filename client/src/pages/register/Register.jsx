import axios from "axios";
import { useState } from "react";
import { Link  } from "react-router-dom";
import "./register.css";
export default function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [error, setError] = useState("");


  const handleSubmit = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPasswordError("");
      setConfirmPassword("");
      setTimeout(() => {
				setError("");
			}, 5000);
			return setError("Passwords do not match");
    } else {
      try {
        const res = await axios.post("/auth/register", {
          username,
          email,
          password,
        });
        res.data && window.location.replace("/login");
      } catch (err) {
        const errors = err.response.data.errors;
        if (errors) {
          errors.forEach((error) => setError(error.msg));
          setTimeout(() => {
            setError("");
          }, 5000);
        }
      }
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
              <div class="slogan">We are one</div>
            </div>
          </div>
          <div class="signup-form ">
            <div class="wrapper-2">
              <div class="form-title">REGISTER</div>
              <div class="form">
                <form onSubmit={handleSubmit}>
                  <p class="content-item">
                    <label>
                      <b>Username</b>{" "}
                    </label>
                    <input
                      className="registerInput"
                      type="text"
                      placeholder="Enter your username...."
                      onChange={(e) => setUsername(e.target.value)}
                    />{" "}
                  </p>

                  <p class="content-item">
                    <label>
                      <b>Email</b>
                    </label>
                    <input
                      className="registerInput"
                      type="text"
                      placeholder="Enter your Email...."
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </p>
                  <p class="content-item">
                    <label>
                      <b>Password</b>
                    </label>
                    <input
                      className="registerInput"
                      type="password"
                      placeholder="Enter your password...."
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </p>
                  <p class="content-item">
                    <label>
                      <b>Confirm Password</b>
                    </label>
                    <input
                      className="registerInput"
                      type="password"
                      placeholder="Confirm password...."
                      onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                  </p>

                  <button className="btnRegister" type="submit">
                    Register
                  </button>
                  <p class="messageLogin">
                   Already have an account? 
                    <Link className="link" to="/login">
                      <a>Login</a>
                    </Link>
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
