import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Registration = () => {
  const [checked, setChecked] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { createUser } = useContext(AuthContext);

  const handleChecked = (event) => {
    setChecked(event.target.checked);
  };

  const handleRegister = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    const password2 = form.password2.value;
    console.log(name, photo, email, password,password2 );

    if (password.length < 6) {
      return setError("Password must be 6 or more character long");
    } else if(password !== password2){
        return setError("Password didn't match")
    } else {
      setError("")
      createUser(email, password)
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.log(error);
        });
      navigate("/")
    }
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Please Register!</h1>
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
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="Email"
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
                  placeholder="Password"
                  name="password"
                  required
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  placeholder="Password"
                  name="password2"
                  required
                  className="input input-bordered"
                />
                <p className="text-error"><small>{error}</small></p>
              </div>
              <div className="form-control">
                <label className="label cursor-pointer">
                  <input
                    onClick={handleChecked}
                    type="checkbox"
                    name="accept"
                    className="checkbox checkbox-primary"
                  />
                  <span className="label-text">
                    Accept Terms and Conditions
                  </span>
                </label>
              </div>
              <div className="form-control mt-4">
                <button disabled={!checked} className="btn btn-primary">
                  Register
                </button>
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
