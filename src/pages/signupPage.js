import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import burger from "../assets/img/burger.jpg";

function SignUpPage() {
  const { register, handleSubmit, formState: { errors }, watch } = useForm();
  const [notification, setNotification] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  // Watch password field value to compare for confirmPassword
  const password = watch('password');

  // Handle form submission
  const onSubmit = (data) => {
    console.log(data); // Process the data or send it to an API
    setNotification('Account created successfully!');
    setTimeout(() => setNotification(''), 3000);
    navigate('/login'); // Redirect to login page after successful sign-up
  };

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword((prevState) => !prevState);
  };

  return (
    <div className="container-fluid d-flex align-items-center justify-content-center" style={{
      background: "linear-gradient(135deg, #FEA116 0%, #FDCB82 100%)", 
      height: "100vh"
    }}>
      <div className="container py-5">
        <h2 className=" text-center  text-white mb-5 fw-normal">Sign Up Our Food App</h2>

        {notification && (
          <div className="alert alert-success text-center">{notification}</div>
        )}

        <div className="row justify-content-center">
          {/* Image Section */}
          <div className="col-lg-5 mb-4">
            <div className="signup_img">
              <img className="img-fluid rounded w-100 obj_fit" src={burger} alt="Burger" />
            </div>
          </div>

          {/* Form Section */}
          <div className="col-lg-5">
            <form onSubmit={handleSubmit(onSubmit)} data-aos="fade-up">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Full Name</label>
                <input
                  id="name"
                  type="text"
                  className="form-control"
                  {...register('name', { required: 'Name is required' })}
                />
                {errors.name && <p className="text-danger">{errors.name.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input
                  id="email"
                  type="email"
                  className="form-control"
                  {...register('email', {
                    required: 'Email is required',
                    pattern: {
                      value: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                      message: 'Enter a valid email address'
                    }
                  })}
                />
                {errors.email && <p className="text-danger">{errors.email.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="password" className="form-label">Password</label>
                <div className="input-group">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    className="form-control"
                    {...register('password', {
                      required: 'Password is required',
                      minLength: { value: 6, message: 'Password should be at least 6 characters' },
                      pattern: {
                        value: /^(?=.*[A-Z])(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                        message: 'Password must start with an uppercase letter and include at least one special character'
                      }
                    })}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={togglePasswordVisibility}
                  >
                    <i className={`fas ${showPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
                {errors.password && <p className="text-danger">{errors.password.message}</p>}
              </div>

              <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                <div className="input-group">
                  <input
                    id="confirmPassword"
                    type={showConfirmPassword ? "text" : "password"}
                    className="form-control"
                    {...register('confirmPassword', {
                      required: 'Please confirm your password',
                      validate: value => value === password || 'Passwords do not match'
                    })}
                  />
                  <button
                    type="button"
                    className="btn btn-outline-secondary"
                    onClick={toggleConfirmPasswordVisibility}
                  >
                    <i className={`fas ${showConfirmPassword ? "fa-eye-slash" : "fa-eye"}`}></i>
                  </button>
                </div>
                {errors.confirmPassword && <p className="text-danger">{errors.confirmPassword.message}</p>}
              </div>

              <button type="submit" className="btn w-100 mt-3 btn order_now py-sm-3 px-sm-5 me-3">Sign Up</button>
            </form>
          </div>
        </div>

        <div className="text-center mt-3">
          <p>Already have an account? <a href="/login">Login</a></p>
        </div>
      </div>
    </div>
  );
}

export default SignUpPage;
