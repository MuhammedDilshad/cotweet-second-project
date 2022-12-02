import React from "react";
import "./Auth.scss";
import Logo from "../../img/logo.png";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logIn } from "../../actions/AuthActions";
import { signUp } from "../../actions/AuthActions";
// import { Form, Formik } from "formik";
// import * as Yup from "yup";

const Auth = () => {
  const dispatch = useDispatch();
  const loading = useSelector((state) => state.authReducer?.loading);
  const [isSignUp, setSignUp] = useState(true);
  console.log(loading);
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    username: "",
    password: "",
    confirmpass: "",
  });

  const [confirmpass, setConfirmPass] = useState(true);

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isSignUp) {
      data.password === data.confirmpass
        ? dispatch(signUp(data))
        : setConfirmPass(false);
    } else {
      dispatch(logIn(data));
    }
  };

  const resetForm = () => {
    setConfirmPass(true);
    setData({
      firstname: "",
      lastname: "",
      username: "",
      password: "",
      confirmpass: "",
    });
  };

  return (
    <div className="Auth">
      {/* Left side */}
      <div className="a-left">
        <img src={Logo} alt="" />
        <div className="Webname">
          <h1>CoTweet</h1>
          <h6>Explore the world</h6>
        </div>
      </div>
      {/* <SignUp /> */}
      {/* <Login /> */}
      {/* right Side */}
      <div className="a-right">
        <form className="infoForm authForm" onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign up" : "Log In"}</h3>

          {isSignUp && (
            <div>
              <input
                type="text"
                placeholder="First Name"
                className="infoInput"
                name="firstname"
                onChange={handleChange}
                value={data.firstname}
              />
              <input
                type="text"
                placeholder="Last Name"
                className="infoInput"
                name="lastname"
                onChange={handleChange}
                value={data.lastname}
              />
            </div>
          )}
          <div>
            <input
              type="text"
              placeholder="User Name"
              className="infoInput"
              name="username"
              onChange={handleChange}
              value={data.username}
            />
          </div>

          <div>
            <input
              type="password"
              placeholder="Password"
              className="infoInput"
              name="password"
              onChange={handleChange}
              value={data.password}
            />
            {isSignUp && (
              <input
                type="password"
                placeholder="Confirm Password"
                className="infoInput"
                name="confirmpass"
                onChange={handleChange}
                value={data.confirmpass}
              />
            )}
          </div>
          <span
            style={{
              display: confirmpass ? "none" : "block",
              color: "red",
              fontSize: "12px",
              alignSelf: "flex-end",
              marginRight: "5px",
            }}
          >
            *Password is not Same
          </span>

          <div>
            <span
              style={{ fontSize: "12px", cursor: "pointer" }}
              onClick={() => {
                setSignUp((prev) => !prev);
                resetForm();
              }}
            >
              {isSignUp
                ? "Already have an account. Login"
                : "Dont have an account? Sign Up "}
            </span>
          </div>
          <button
            className="button infoButton"
            type="submit"
            disabled={loading}
          >
            {loading ? "loading..." : isSignUp ? "Signup" : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

// function Login() {
//   const initialValue = {
//     password: "",
//     email: "",
//   };

//   const [formValues, setformValues] = useState(initialValue);
//   const [formError, setformError] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setformError(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(
//     (formValues) => {
//       console.log(formError);
//       if (Object.keys(formError).length === 0 && isSubmit) {
//       }
//     },
//     [formError]
//   );

//   const validate = (formValues) => {
//     const errors = {};
//     const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
//     if (!formValues.email) {
//       errors.email = "email is required";
//     } else if (!regex.test(formValues.email)) {
//       errors.email = "This is not valid";
//     }
//     if (!formValues.password) {
//       errors.password = "password is required";
//     } else if (formValues.password.length < 4) {
//       errors.password = "Password minimum 4 char";
//     } else if (formValues.password.length > 8) {
//       errors.password = "Password maximum 8 char";
//     }
//     return errors;
//   };
//   return (
//     <div className="a-right">
//       <form className="infoForm authForm" onSubmit={handleSubmit}>
//         <h1>Log In</h1>
//         <div>
//           <input
//             type="email"
//             placeholder="email"
//             className="infoInput"
//             name="email"
//             value={formValues.email}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.email ? (
//             <div className="error">{formError.email}</div>
//           ) : null}
//         </>
//         <div>
//           <input
//             type="password"
//             placeholder="password"
//             className="infoInput"
//             name="password"
//             value={formValues.password}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.password ? (
//             <div className="error">{formError.password}</div>
//           ) : null}
//         </>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Don't have an account. Sign up
//           </span>

//           <button className="button infoButton">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// }

// function SignUp() {
//   const initialValues = {
//     firstname: "",
//     lastname: "",
//     username: "",
//     password: "",
//     confirmpass: "",
//     email: "",
//     gender: "",
//     phone: "",
//   };
//   const [formValues, setformValues] = useState(initialValues);
//   const [formError, setformError] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setformValues({ ...formValues, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setformError(validate(formValues));
//     setIsSubmit(true);
//   };

//   useEffect(
//     (formValues) => {
//       console.log(formError);
//       if (Object.keys(formError).length === 0 && isSubmit) {
//       }
//     },
//     [formError]
//   );

//   const validate = (formValues) => {
//     const errors = {};
//     const regex = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
//     if (!formValues.firstname) {
//       errors.firstname = "Firstname is required      ";
//     } else if (formValues.firstname.length < 4) {
//       errors.firstname = "Firstname minimum 4 char";
//     }
//     if (!formValues.lastname) {
//       errors.lastname = "Lastname is required";
//     } else if (formValues.lastname.length < 4) {
//       errors.lastname = "Lastname minimum 4 char";
//     }
//     if (!formValues.username) {
//       errors.username = "username is required";
//     } else if (formValues.username.length < 4) {
//       errors.username = "username minimum 4 char";
//     }
//     if (!formValues.password) {
//       errors.password = "password is required";
//     } else if (formValues.password.length < 4) {
//       errors.password = "Password minimum 4 char";
//     } else if (formValues.password.length > 8) {
//       errors.password = "Password maximum 8 char";
//     }
//     console.log(formValues.confirmpass);
//     console.log(formValues.password);

//     if (!formValues.confirmpass) {
//       errors.confirmpass = "confirm password is required";
//     } else if (formValues.password !== formValues.confirmpass) {
//       errors.confirmpass = "Enter the same Password";
//     }

//     if (!formValues.email) {
//       errors.email = "email is required";
//     } else if (!regex.test(formValues.email)) {
//       errors.email = "This is not valid";
//     }
//     if (!formValues.gender) {
//       errors.gender = "gender is required";
//     }
//     if (!formValues.phone) {
//       errors.phone = "Number is required";
//     } else if (formValues.phone.length !== 10) {
//       errors.phone = "Number ten char required";
//     }
//     return errors;
//   };

//   return (
//     <div className="a-right">
//       <form className="infoForm authForm" onSubmit={handleSubmit}>
//         <h3>Sign up</h3>
//         <div>
//           <input
//             type="text"
//             placeholder="First Name"
//             className="infoInput"
//             name="firstname"
//             value={formValues.firstname}
//             onChange={handleChange}
//           />
//           <input
//             type="text"
//             placeholder="Last Name"
//             className="infoInput"
//             name="lastname"
//             value={formValues.lastname}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.firstname ? (
//             <div className="error">{formError.firstname}</div>
//           ) : null}
//         </>
//         <>
//           {formError.lastname ? (
//             <div className="error">{formError.lastname}</div>
//           ) : null}
//         </>
//         <div>
//           <input
//             type="text"
//             placeholder="User Name"
//             className="infoInput"
//             name="username"
//             value={formValues.username}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.username ? (
//             <div className="error">{formError.username}</div>
//           ) : null}
//         </>
//         <div>
//           <input
//             type="Number"
//             placeholder="Number"
//             className="infoInput"
//             name="phone"
//             value={formValues.phone}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.phone ? (
//             <div className="error">{formError.phone}</div>
//           ) : null}
//         </>
//         <div>
//           <input
//             type="password"
//             placeholder="Password"
//             className="infoInput"
//             name="password"
//             value={formValues.password}
//             onChange={handleChange}
//           />
//           <input
//             type="password"
//             placeholder="Confirm Password"
//             className="infoInput"
//             name="confirmpass"
//             value={formValues.confirmpass}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.password ? (
//             <div className="error">{formError.password}</div>
//           ) : null}
//         </>
//         <>
//           {formError.confirmpass ? (
//             <div className="error">{formError.confirmpass}</div>
//           ) : null}
//         </>
//         <div>
//           <input
//             type="email"
//             placeholder="Email"
//             className="infoInput"
//             name="email"
//             value={formValues.email}
//             onChange={handleChange}
//           />
//         </div>
//         <>
//           {formError.email ? (
//             <div className="error">{formError.email}</div>
//           ) : null}
//         </>
//         <div>
//           <h4>Gender</h4>
//           <div>
//             <input
//               type="radio"
//               className="infoInput"
//               name="gender"
//               value={formValues.gender}
//               onChange={handleChange}
//             />
//             Male
//           </div>
//           <div>
//             <input
//               type="radio"
//               className="infoInput"
//               name="gender"
//               value={formValues.gender}
//               onChange={handleChange}
//             />
//             Female
//           </div>
//           <>
//             {formError.gender ? (
//               <div className="error">{formError.gender}</div>
//             ) : null}
//           </>
//         </div>
//         <div>
//           <span style={{ fontSize: "12px" }}>
//             Already have an account. Login
//           </span>
//         </div>
//         <button className="button infoButton" type="submit">
//           Signup
//         </button>
//       </form>
//     </div>
//   );
// }

export default Auth;
