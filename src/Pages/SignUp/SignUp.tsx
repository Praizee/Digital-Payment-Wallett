import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile, sendEmailVerification } from 'firebase/auth';
import { auth } from '../../Firebase/firebase';
import { getDatabase, ref, set } from 'firebase/database';
import { useAppContext, UserState } from "../../Context/AppContext";

import { motion } from "framer-motion";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import SignUpImg from "../../assets/young-afro-man-listening-music-with-headphones_58466-16300.webp"
import { Spinner } from "@material-tailwind/react"; // Import the Spinner component
import Alerts from "../../Components/Alerts/Alerts";

const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const SignUp = () => {
  const { user, setUser } = useAppContext(); // Use the user state from the context
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false); // Add loading state
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value, name } = e.target;
    setUser((prevUser: UserState | null) => ({
      ...(prevUser as UserState), // Type assertion to UserState
      [name]: value,
    }));
  };


  const initialUserState = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  const onSignup = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setSuccess(null);

    // Extract user input
    const { email, password, firstName, lastName } = user || {};


    // Check if any field is empty
    if (!email || !password || !firstName || !lastName) {
      setError("Please fill in all fields.");
      return;
    }

    // Check if the email is valid
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setError("Invalid email. Email should contain an '@'.");
      return;
    }

    // Check if the password meets your criteria
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!passwordRegex.test(password)) {
      setError(
        "Password should be at least 6 characters and contain at least one uppercase letter, one lowercase letter, and one number.",
      );
      return;
    }

    setLoading(true);

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      await updateProfile(userCredential.user, {
        displayName: `${firstName} ${lastName}`,
      });

      // Send email verification
      await sendEmailVerification(userCredential.user);

      const db = getDatabase();
      const usersRef = ref(db, "users/" + userCredential.user.uid);

      set(usersRef, {
        first_name: firstName,
        last_name: lastName,
        email: email,
        password: password,
      });

      // Add the success message here
      console.log("Account created successfully! Please check your email to verify your account.");
      setSuccess("Account created successfully! Please check your email to verify your account.");

      // Automatically clear the success message and navigate after 5 seconds
      setTimeout(() => {
        setSuccess(null);
        navigate("/");
      }, 5000);
    } catch (error) {
      console.error("Error creating user:", error);
      setError((error as Error).message);
    } finally {
      setLoading(false);
    }
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
                alt="Young woman with afro"
                // src="https://img.freepik.com/free-photo/young-afro-man-listening-music-with-headphones_58466-16300.jpg?w=826&t=st=1697019303~exp=1697019903~hmac=0aeb08042032beb895d26e4479fbbd396f88a62c89d2e4a5212a8da42a6ab798"
                src={SignUpImg}
                className="absolute inset-0 h-full w-full object-cover opacity-40"
              />

              <div className="hidden lg:relative rounded-lg p-2 lg:block lg:p-12">
                <a className="block w-min text-gray-200" href="/">
                  <span className="sr-only">Home</span>
                </a>

                <h2 className="mt-6 text-2xl font-bold text-gray-200 sm:text-3xl md:text-4xl">
                  Get Started
                </h2>

                <p className="mt-4 leading-relaxed text-gray-200">
                  Discover a world of convenience with our digital wallet app.
                  Easily manage your finances and enjoy a wide range of services,
                  including cable subscription, electricity bill payments, mobile
                  airtime and data purchases, and hassle-free cash transfers.
                  Start exploring the possibilities today!
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
                    className="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl"
                  >
                    Get Started
                  </h1>

                  <p className="mt-4 leading-relaxed text-gray-500">
                    Discover a world of convenience with our digital wallet app.
                    Easily manage your finances and enjoy a wide range of services,
                    including cable subscription, electricity bill payments, mobile
                    airtime and data purchases, and hassle-free cash transfers.
                    Start exploring the possibilities today!
                  </p>
                </div>

                {/* border-2 border-dotted border-[#0071F2] px-8 py-2 */}
                <form onSubmit={onSignup}
                  className=" mt-8 md:mt-0 rounded-lg grid grid-cols-6 gap-6 border-2 border-dotted border-[#0071F2] p-10 md:p-5">

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="FirstName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      First Name
                    </label>

                    <input
                      type="text"
                      id="FirstName"
                      value={user?.firstName ?? ""}
                      onChange={(e) => handleChange(e)}
                      name="firstName"
                      required
                      placeholder="First name"
                      autoFocus
                      className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6 sm:col-span-3">
                    <label
                      htmlFor="LastName"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Last Name
                    </label>

                    <input
                      type="text"
                      id="LastName"
                      value={user?.lastName ?? ""}
                      onChange={(e) => handleChange(e)}
                      name="lastName"
                      required
                      placeholder="Last name"
                      className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Email" className="block text-sm font-medium text-gray-700">
                      Email
                    </label>

                    <input
                      type="email"
                      id="Email"
                      required
                      value={user?.email ?? ""}
                      onChange={(e) => handleChange(e)}
                      name="email"
                      placeholder="Email address"
                      className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                    />
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="Password" className="block text-sm font-medium text-gray-700">
                      Password
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={user?.password ?? ""}
                        onChange={(e) => handleChange(e)}
                        id="Password"
                        name="password"
                        required
                        className="input mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 grid w-10 place-content-center text-gray-600 hover:text-gray-700"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <AiOutlineEyeInvisible size={23} title="Hide" /> : <AiOutlineEye size={23} title="Show" />}
                      </button>
                    </div>
                  </div>

                  <div className="col-span-6">
                    <label htmlFor="MarketingAccept" className="flex gap-4">
                      <input
                        type="checkbox"
                        id="MarketingAccept"
                        name="marketing_accept"
                        className="h-5 w-5 rounded-md border-gray-200 bg-white shadow-sm"
                      />

                      <span className="text-[0.725rem] text-gray-700">
                        I want to receive emails about events, product updates and
                        company announcements.
                      </span>
                    </label>
                  </div>

                  <div className="col-span-6">
                    <p className="text-[0.725rem] text-gray-500">
                      By creating an account, you agree to our &nbsp;
                      <a className="text-[#0071F2] text-[0.725rem] link link-hover ">
                        terms and conditions
                      </a>
                      &nbsp; and &nbsp;
                      <a className="text-[#0071F2] text-[0.725rem] link link-hover">privacy policy</a>.
                    </p>
                  </div>

                  <div className="col-span-6">
                    <button
                      type="submit"
                      className="inline-block w-full shrink-0 rounded-md border border-blue-600 bg-blue-600 px-12 py-3 text-sm font-medium text-white transition hover:bg-transparent hover:text-blue-600 focus:outline-none focus:ring active:text-blue-500"
                    >
                      {loading ? (
                        <>
                          <span className="flex place-content-center gap-2">
                            <Spinner color="blue" className="h-5 w-5 text-gray-500" />  {/* Show "Logging in..." along with the spinner when loading */}
                            <span className="text-gray-800 text-sm">Creating Account... </span>
                          </span>
                        </>
                      ) : (
                        'Create account' // Show "Log in" when not loading
                      )}
                    </button>

                  </div>

                  <p className="-mt-4 col-span-6 text-sm text-gray-500">
                    Already have an account? &nbsp;
                    <Link to="/"
                      className="text-[#0071F2] font-semibold text-sm link link-hover">
                      Log in
                    </Link>.
                  </p>

                  <div className="col-span-6 sm:flex sm:items-center mx-auto sm:gap-4">
                    <p className="mt-4 text-sm sm:mt-0">
                      Have any questions? &nbsp;
                      <a className="text-[#0071F2] text-sm font-semibold link link-hover">Chat with us</a>.
                    </p>
                  </div>
                  {/* Display the Alerts component with error and success messages */}
                  <Alerts error={error} success={success} />
                  {/* Pass successMessages to Alerts component */}
                </form>
              </div>

            </main>
          </div>
        </section>

      </motion.div>
    </section>
  );
};

export default SignUp;
