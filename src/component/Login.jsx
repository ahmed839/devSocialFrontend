import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { Navigate, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../env";
const Login = () => {
  const [emailId, setEmailId] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const loginHandler = async () => {
    try {
      const response = await axios.post(
        BASE_URL + "/login",
        {
          emailId,
          password,
        },
        { withCredentials: true }
      );
      console.log(response.data.data);
      dispatch(addUser(response.data.data));
      navigator("/");
    } catch (err) {
      console.log("Error:" + err);
    }
  };

  return (
    <div className="flex items-center justify-center">
      <div className="card w-96 bg-primary text-primary-content my-14 shadow-xl">
        <div className="card-body">
          <h2 className="card-title text-center w-full">Login</h2>
          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-primary-content">Email Id</span>
            </div>
            <input
              type="text"
              value={emailId}
              className="input input-bordered w-full max-w-xs text-black"
              onChange={(e) => setEmailId(e.target.value)}
            />
          </label>

          <label className="form-control w-full max-w-xs mx-auto my-2">
            <div className="label">
              <span className="label-text text-primary-content">Password</span>
            </div>
            <input
              type="password"
              value={password}
              className="input input-bordered w-full max-w-xs text-black"
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          <div className="card-actions justify-center mt-4">
            <button className="btn btn-white" onClick={loginHandler}>
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
