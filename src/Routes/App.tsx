import React from "react";
import { Route, Routes } from 'react-router-dom';
import PublicLayout from "../Layouts/PublicLayout";
import AuthenticatedLayout from "../Layouts/AuthenticatedLayout";
import AuthRoute from './AuthRoute'; // Import the AuthRoute component

import Contact from "../Pages/Contact/Contact";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import SignUp from "../Pages/SignUp/SignUp";
import Profile from "../Pages/Profile/Profile";
import PinManagement from "../Pages/PinManagement/PinManagement";
import ChangePassword from "../Pages/ChangePassword/ChangePassword";
import FundWallet from "../Pages/FundWallet/FundWallet";
import BuyRecharge from "../Pages/BuyData/BuyRecharge";
import ElectricityPayment from "../Pages/ElectricityPayment/ElectricityPayment";
import CableSubscription from "../Pages/CableSubscription/CableSubscription";
import Transfer from "../Pages/Transfer/Transfer";
import TransactionHistory from "../Pages/TransactionHistory/TransactionHistory";
import Support from "../Pages/Support/Support";
import Faqs from "../Pages/Faqs/Faqs";
import Settings from "../Pages/Settings/Settings";
import ResetPassword from "../Pages/ResetPassword/ResetPassword";
import NotFoundPage from "../Pages/404 Page/NotFoundPage";

export default function App() {

  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route index element={<Login />} />
        <Route path="signup" element={<SignUp />} />
        <Route path="reset-password" element={<ResetPassword />} />
      </Route>

      <Route element={<AuthenticatedLayout />}>
        {/* <Route index element={<Dashboard />} /> */}
        {/* change this back to being the index element when the authentication endpoint is setup */}
        <Route path="dashboard" element={<AuthRoute><Dashboard /></AuthRoute>} />
        <Route path="profile" element={<AuthRoute><Profile /></AuthRoute>} />
        <Route path="pin-management" element={<AuthRoute><PinManagement /></AuthRoute>} />
        <Route path="change-password" element={<AuthRoute><ChangePassword /></AuthRoute>} />
        <Route path="fund-wallet" element={<AuthRoute><FundWallet /></AuthRoute>} />
        <Route path="topup" element={<AuthRoute><BuyRecharge /></AuthRoute>} />
        <Route path="electricity-payment" element={<AuthRoute><ElectricityPayment /></AuthRoute>} />
        <Route path="cable-subscription" element={<AuthRoute><CableSubscription /></AuthRoute>} />
        <Route path="transfer" element={<AuthRoute><Transfer /></AuthRoute>} />
        <Route path="transaction-history" element={<AuthRoute><TransactionHistory /></AuthRoute>} />
        <Route path="support" element={<AuthRoute><Support /></AuthRoute>} />
        <Route path="faqs" element={<AuthRoute><Faqs /></AuthRoute>} />
        <Route path="settings" element={<AuthRoute><Settings /></AuthRoute>} />
        <Route path="contact" element={<AuthRoute><Contact /></AuthRoute>} />
      </Route>
      {/* This is the catch-all route */}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )

}