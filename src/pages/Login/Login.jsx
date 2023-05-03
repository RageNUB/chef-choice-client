import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../provider/AuthProvider";

const Login = () => {
  const {googleSignIn, githubSignIn, signIn} = useContext(AuthContext);

  const handleGoogleSignIn = () => {
    googleSignIn()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleGithubSignIn = () => {
    githubSignIn()
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
  }

  const handleLogIn = event => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password)
    signIn(email, password)
    .then(result => {
      console.log(result)
    })
    .catch(error => {
      console.log(error)
    })
}

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Login!</h1>
            <div className="mt-4 shadow-2xl bg-base-100 p-4 rounded-lg text-center">
              <button onClick={handleGoogleSignIn} className="btn btn-wide btn-outline text-primary hover:bg-primary hover:border-none mb-2"><FaGoogle className="mr-2"></FaGoogle>login with Google</button>
              <button onClick={handleGithubSignIn} className="btn btn-wide btn-outline text-accent hover:bg-accent hover:border-none"><FaGithub className="mr-2"></FaGithub>Login with Github</button>
            </div>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form onSubmit={handleLogIn} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
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
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
