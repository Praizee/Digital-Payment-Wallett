import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../../Firebase/firebase.js';

import { motion } from "framer-motion";
import AvailableBalance from "../../Components/Main/AvailableBalance";
import HeaderGraph from "../../Components/Main/HeaderGraph";
import Statistics from "../../Components/Main/Statistics";
import { CustomerTable } from "../../Components/Main/CustomerTable";

import { useAppContext } from '../../Context/AppContext'; // Updated import to useAppContext
import GreetingMessage from '../../Components/Greeting/GreetingMessage.jsx';
import CreditCard from '../../Components/CreditCard/CreditCard.jsx';

// Define animation configuration
const animationConfiguration = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
};

const Dashboard = () => {
  const { user } = useAppContext(); // Use the user state from the context
  console.log('User:', user); // Log the user data

  // useEffect to monitor user authentication state
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const uid = user.uid;
        // console.log("uid", uid)
        console.log("user is logged in");
      } else {
        // User is signed out
        console.log("user is logged out");
      }
    });
  }, []);

  return (
    <motion.div
      variants={animationConfiguration}
      initial="initial"
      animate="animate"
      exit="exit"
      transition={{ duration: 1.5 }}
    >
      <section className="text-black bg-[#F6F6F6]">
        <div className="container pt-24 pb-16 px-">

          <div className="tablet:px-4 px-0 relative">

            <div className="relative space-y-4">
              <h1 className="text-[1.2rem] flex gap-2 text-[#2E2E3A] leading-tight font-bold">
                <GreetingMessage />
                <span className="text-blue-500 text-[1.2rem]">
                  {user && user.firstName ? user.firstName : 'User'}
                </span>
              </h1>

              <h1 className="text-[2rem] text-[#2E2E3A] leading-normal font-bold">
                Overview
              </h1>

              <div className="laptop:flex gap-20 justify-betwee">
                <AvailableBalance />
                <div className="hidden laptop:block">
                  <CreditCard />
                </div>
              </div>

              <div className=''>
                {/* <HeaderGraph /> */}
              </div>

              <div className="laptop:hidden overflow-x-auto max-w-[20.5rem] min-w-[19.5rem] tablet:max-w-[35.5rem]">
                <CreditCard />
              </div>

              <div className="">
                <Statistics />
              </div>

              <div className="overflow-x-auto max-w-[20.5rem] min-w-[19.5rem] tablet:max-w-[35.5rem] laptop:max-w-full">
                <CustomerTable />
              </div>
            </div>

          </div>
        </div>
      </section>
    </motion.div>
  );
};

export default Dashboard;
