import React, { useState } from "react";
import "./Login.css";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log("from inside Login");
  }

  function validateForm() {
    return email.length > 0 && password.length > 0;
  }

  return (
    <div className="Login">
      <h1>Hello form Home components</h1>
      <form onSubmit={handleSubmit}>
        <h2>Login Form</h2>

        <div>
          <label>User Email</label>{" "}
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter Your Email"
          />{" "}
          <br />
          <label>Password</label>{" "}
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            placeholder="Enter Password"
          />{" "}
          <br />
        </div>

        <button type="submit" disabled={!validateForm()}>
          Login
        </button>
        <div>
          <input type="checkbox" name="remember" /> remember me <br />
        </div>
      </form>
    </div>
  );
}
 