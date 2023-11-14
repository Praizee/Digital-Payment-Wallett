import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../Firebase/firebase.js';

import { motion } from "framer-motion";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import LoginImg from "../../assets/login.jpeg";
import { Spinner } from "@material-tailwind/react"; // Import the Spinner component
import Alerts from "../../Components/Alerts/Alerts.jsx";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false); // Add loading state
  const [errorMessages, setErrorMessages] = useState([]);



  const onLogin = (e) => {
    e.preventDefault();
    setErrorMessages([]); // Clear any previous error messages
    setLoading(true); // Start loading

    if (!email || !password) {
      setErrorMessages(['Email and password are required.']);
      setLoading(false);
      return;
    }

    let errorMessage = ''; // Use let instead of const

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        navigate("/dashboard");
        console.log(user);
        console.log("Signed in!");
      })
      .catch((error) => {
        const errorCode = error.code;
        errorMessage = error.message; // Reassign errorMessage with let

        // delete this to continue using FirebaseError
        if (errorCode === "auth/invalid-login-credentials") {
          errorMessage = "Invalid login credentials. Check your email and password and try again.";
        }

        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        // Set the error message to display to the user
        setErrorMessages([errorMessage]);
        setLoading(false); // Stop loading after success or failure
      });
  };



  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <section className="text-black bg-[#F6F6F6]">
      <motion.div
        variants={animationConfiguration}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.8 }}
      >

        <section className="bg-white">

          <div className="lg:grid lg:min-h-screen lg:grid-cols-12">
            <section
              className="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6"
            >

              <img
                alt="We're glad you're here"
                // src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                src={LoginImg}
                className="absolute inset-0 h-full w-full object-cover opacity-50"
              />

              <div className="hidden lg:relative rounded-lg p-2 lg:block lg:p-12">
                <a className="block sr-only w-min text-gray-100" href="/">
                  <span className="sr-only">Home</span>
                  <svg
                    className="h-8 sm:h-10"
                    viewBox="0 0 28 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>

                <h2 className="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
                  Welcome!
                </h2>

                <p className="mt-4 leading-relaxed text-gray-200">
                  Login to your Account to continue.
                </p>
              </div>
            </section>

            <main
              className="flex items-center justify-center px-8 py-8 sm:px-12 lg:col-span-7 lg:px-16 lg:py-12 xl:col-span-6"
            >
              <div className="max-w-xl lg:max-w-3xl">
                <div className="relative -mt-16 block lg:hidden">
                  <a
                    className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-white text-blue-600 sm:h-20 sm:w-20"
                    href="/"
                  >
                    <span className="sr-only">Home</span>
                    <svg
                      className="h-8 sm:h-10"
                      viewBox="0 0 28 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0.41 10.3847C1.14777 7.4194 2.85643 4.7861 5.2639 2.90424C7.6714 1.02234 10.6393 0 13.695 0C16.7507 0 19.7186 1.02234 22.1261 2.90424C24.5336 4.7861 26.2422 7.4194 26.98 10.3847H25.78C23.7557 10.3549 21.7729 10.9599 20.11 12.1147C20.014 12.1842 19.9138 12.2477 19.81 12.3047H19.67C19.5662 12.2477 19.466 12.1842 19.37 12.1147C17.6924 10.9866 15.7166 10.3841 13.695 10.3841C11.6734 10.3841 9.6976 10.9866 8.02 12.1147C7.924 12.1842 7.8238 12.2477 7.72 12.3047H7.58C7.4762 12.2477 7.376 12.1842 7.28 12.1147C5.6171 10.9599 3.6343 10.3549 1.61 10.3847H0.41ZM23.62 16.6547C24.236 16.175 24.9995 15.924 25.78 15.9447H27.39V12.7347H25.78C24.4052 12.7181 23.0619 13.146 21.95 13.9547C21.3243 14.416 20.5674 14.6649 19.79 14.6649C19.0126 14.6649 18.2557 14.416 17.63 13.9547C16.4899 13.1611 15.1341 12.7356 13.745 12.7356C12.3559 12.7356 11.0001 13.1611 9.86 13.9547C9.2343 14.416 8.4774 14.6649 7.7 14.6649C6.9226 14.6649 6.1657 14.416 5.54 13.9547C4.4144 13.1356 3.0518 12.7072 1.66 12.7347H0V15.9447H1.61C2.39051 15.924 3.154 16.175 3.77 16.6547C4.908 17.4489 6.2623 17.8747 7.65 17.8747C9.0377 17.8747 10.392 17.4489 11.53 16.6547C12.1468 16.1765 12.9097 15.9257 13.69 15.9447C14.4708 15.9223 15.2348 16.1735 15.85 16.6547C16.9901 17.4484 18.3459 17.8738 19.735 17.8738C21.1241 17.8738 22.4799 17.4484 23.62 16.6547ZM23.62 22.3947C24.236 21.915 24.9995 21.664 25.78 21.6847H27.39V18.4747H25.78C24.4052 18.4581 23.0619 18.886 21.95 19.6947C21.3243 20.156 20.5674 20.4049 19.79 20.4049C19.0126 20.4049 18.2557 20.156 17.63 19.6947C16.4899 18.9011 15.1341 18.4757 13.745 18.4757C12.3559 18.4757 11.0001 18.9011 9.86 19.6947C9.2343 20.156 8.4774 20.4049 7.7 20.4049C6.9226 20.4049 6.1657 20.156 5.54 19.6947C4.4144 18.8757 3.0518 18.4472 1.66 18.4747H0V21.6847H1.61C2.39051 21.664 3.154 21.915 3.77 22.3947C4.908 23.1889 6.2623 23.6147 7.65 23.6147C9.0377 23.6147 10.392 23.1889 11.53 22.3947C12.1468 21.9165 12.9097 21.6657 13.69 21.6847C14.4708 21.6623 15.2348 21.9135 15.85 22.3947C16.9901 23.1884 18.3459 23.6138 19.735 23.6138C21.1241 23.6138 22.4799 23.1884 23.62 22.3947Z"
                        fill="currentColor"
                      />
                    </svg>
                  </a>

                  <h1
                    className="mt-6 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                  >
                    Welcome!
                  </h1>

                  <p className="mt-4 leading-relaxed text-gray-500">
                    Login to your Account to continue.
                  </p>
                </div>

                <form className=" mt-8 rounded-lg grid grid-cols-6 gap-6 border-2 border-dotted border-[#0071F2] p-6 md:p-10">

                  <div className="col-span-6 ">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email address"
                      required
                      autoFocus
                      className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  {/* password */}
                  <div className="col-span-6 relative">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      id="Password"
                      required
                      className="w-full mt-1 input rounded-md border-gray-200 py-2.5 px-2.5 pe-10 shadow-sm text-sm"
                    />
                    <span className="absolute inset-y-0 end-0 grid w-10 place-content-center">
                      <button type="button" className="text-gray-600 mt-6 hover:text-gray-700" onClick={togglePasswordVisibility}>
                        {showPassword ? <AiOutlineEyeInvisible size={23} title="Hide" /> : <AiOutlineEye size={23} title="Show" />}
                      </button>
                    </span>
                  </div>
                  {/* end of password */}

                  <div className="col-span-6 flex justify-between">
                    <label htmlFor="MarketingAccept" className="flex gap-2">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className=" rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-sm font-medium">
                        Remember Me
                      </span>
                    </label>
                    <Link to="/reset-password"
                      className="mt-0 text-sm text-[#0071F2] font-semibold link link-hover">
                      Forgot password?
                    </Link>

                  </div>

                  <div className="col-span-6 sm:gap-4">
                    <button
                      onClick={onLogin}
                      className="inline-block shrink-0 w-full rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                      disabled={loading} // Disable the button while loading
                    >
                      {loading ? (
                        <>
                          <span className="flex place-content-center gap-2">
                            <Spinner color="blue" className="h-5 w-5 text-gray-500" />
                            <span className="text-gray-800 text-sm">Logging in... </span>
                          </span>
                        </>
                      ) : (
                        'Log in'
                      )}
                    </button>
                  </div>

                  <div className="col-span-6 sm:gap-4">
                    <p className="-mt-4 text-sm text-gray-500">
                      Don't have an account? &nbsp;
                      <Link to="/signup"
                        className="text-[#0071F2] font-semibold text-sm link link-hover">
                        Sign up
                      </Link>.
                    </p>
                  </div>

                  <div className="col-span-6">
                    <p className="mt- text-sm sm:mt-0">
                      Having problems logging in? &nbsp;
                      <a className="text-[#0071F2] text-sm font-semibold link link-hover">Chat with us</a>.
                    </p>
                  </div>
                  {/* error alert message */}
                  <Alerts errorMessages={errorMessages} />
                </form>
              </div>
            </main>
          </div>
        </section>


      </motion.div>
    </section>
  );
};

export default Login;
