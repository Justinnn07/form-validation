import React, { useState } from "react";

const Component = ({
  headingLabel,
  headingPlaceHolder,
  passwordLabel,
  passwordPlaceHolder,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [todoData] = useState([]);

  // const login = () => {
  //   if (email === credentials.email && password === credentials.password) {
  //     alert("Form Validated");
  //   } else {
  //     alert("Error");
  //
  // };

  // create a calculator and find sum , then display the final output using map and useState

  const addTask = () => {
    const obj = {
      name: password,
      task: email,
    };

    todoData.push(obj);
    console.log(todoData);
    setEmail("");
    setPassword("");
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
          {headingLabel}
        </label>
        <input
          type="email"
          className="form-control"
          id="exampleFormControlInput1"
          value={email}
          placeholder={headingPlaceHolder}
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-3">
        <label for="exampleFormControlInput1" className="form-label">
          {passwordLabel}
        </label>
        <input
          value={password}
          onChange={onPasswordChange}
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
          placeholder={passwordPlaceHolder}
        />
        <button
          type="button"
          style={{ marginTop: 20, width: "100%" }}
          class="btn btn-success"
          onClick={addTask}
        >
          Add Task
        </button>
      </div>
      {todoData.map((element) => {
        return (
          <div>
            <h2>Task: {element.task}</h2>
            <h2>Name: {element.name}</h2>
          </div>
        );
      })}
    </div>
  );
};

export default Component;
