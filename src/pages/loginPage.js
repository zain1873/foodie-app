import React, { useState } from "react";
import { useForm } from "react-hook-form";
import burger from "../assets/img/burger.jpg";
import "../styles/login.css";

function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [showPassword, setShowPassword] = useState(false);

  const onSubmit = (data) => {
    console.log("Login Data:", data);
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div
      className="container-fluid d-flex align-items-center justify-content-center"
      style={{
        background: "linear-gradient(135deg, #FEA116 0%, #FDCB82 100%)",
        height: "100vh",
      }}
    >
      <div className="container py-5">
        <div className="row justify-content-center align-items-center">
          {/* Image Section */}
          <div className="col-lg-5 mb-4">
            <div className="login_img">
              <img
                className="img-fluid rounded w-100 obj_fit"
                src={burger}
                alt="Burger"
              />
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-5" data-aos="fade-up">
            <form onSubmit={handleSubmit(onSubmit)}>
              <h2 className="text-center mb-4">Login to Your Account</h2>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: "Enter a valid email address",
                    },
                  })}
                />
                {errors.email && (
                  <p className="text-danger">{errors.email.message}</p>
                )}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <div className="input-group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    {...register("password", {
                      required: "Password is required",
                      minLength: {
                        value: 6,
                        message: "Password should be at least 6 characters",
                      },
                    })}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary eye"
                    onClick={togglePasswordVisibility}
                  >
                    <i
                      className={`fas ${
                        showPassword ? "fa-eye-slash" : "fa-eye"
                      }`}
                    ></i>
                  </button>
                </div>
                {errors.password && (
                  <p className="text-danger">{errors.password.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="btn w-100 mt-3 order_now py-sm-3 px-sm-5"
              >
                Login
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
