import React, { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const credentials = {
    email: "shristi@gmail.com",
    password: "123456",
  };

  const login = () => {
    if (email === credentials.email && password === credentials.password) {
      alert("Form Validated");
    } else {
      alert("Error");
    }
  };

  const onEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <div classNameName="login">
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Email address
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={email}
          placeholder="name@example.com"
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          Password
        </label>
        <input
          value={password}
          onChange={onPasswordChange}
          type="password"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder="password..."
        />
        <button
          type="button"
          style={{ marginTop: 20, width: "100%" }}
          class="btn btn-success"
          onClick={login}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
