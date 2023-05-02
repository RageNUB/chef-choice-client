import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login!</h1>
            <div className="mt-4 shadow-2xl bg-base-100 p-4 rounded-lg text-center">
              <button className="btn btn-wide btn-outline text-primary hover:bg-primary hover:border-none mb-2">login with Google</button>
              <button className="btn btn-wide btn-outline text-accent hover:bg-accent hover:border-none">Login with Github</button>
            </div>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-4">
                <button className="btn btn-primary">Login</button>
              </div>
              <p>
                <small>
                  New to Chef Choice?{" "}
                  <Link to="/register" className="underline">
                    Register
                  </Link>
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
