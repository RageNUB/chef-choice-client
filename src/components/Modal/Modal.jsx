import React, { useContext } from "react";
import { AuthContext } from "../../provider/AuthProvider";

const Modal = () => {
  const { passwordReset } = useContext(AuthContext);

  const handlePassReset = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    passwordReset(email)
      .then((result) => {
        console.log(result)
        alert("Check Your Email for Reset Your Password")
        form.reset();
      })
      .then((error) => console.log(error));
  };

  return (
    <div>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Forget Password?</h3>
          <form onSubmit={handlePassReset}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Enter your Email Here</span>
              </label>
              <input
                type="email"
                placeholder="Email"
                name="email"
                required
                className="input input-bordered"
              />
            </div>
            <div className=" form-control mt-4 text-end">
              <button className="btn btn-primary">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
