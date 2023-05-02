import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub, FaGoogle } from "react-icons/fa";

const Registration = () => {
    const [checked, setChecked] = useState(false);

    const handleChecked = event => {
        setChecked(event.target.checked)
    }

    const handleRegister = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)
    }

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!</h1>
            <div className="mt-4 shadow-2xl bg-base-100 p-4 rounded-lg text-center">
              <button className="btn btn-wide btn-outline text-primary hover:bg-primary hover:border-none mb-2">
                <FaGoogle className="mr-2"></FaGoogle> Register with Google
              </button>
              <button className="btn btn-wide btn-outline text-accent hover:bg-accent hover:border-none">
                <FaGithub className="mr-2"></FaGithub> Register with Github
              </button>
            </div>
          </div>
          <div className="card w-full shadow-2xl bg-base-100">
            <form className="card-body" onSubmit={handleRegister}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Name"
                  name="name"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  name="photo"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  required
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
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input onClick={handleChecked}
                    type="checkbox"
                    name="accept"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">Accept Terms and Conditions</span>
                </label>
              </div>
              <div className="form-control mt-4">
                <button disabled={!checked} className="btn btn-primary">Register</button>
              </div>
              <p>
                <small>
                  Already Have an Account?{" "}
                  <Link to="/login" className="underline">
                    Please login
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

export default Registration;
