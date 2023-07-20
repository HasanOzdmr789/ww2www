import React, { useState } from "react";
import profileData from "@/profileData";
import {
  FaChartLine,
  FaMoneyBillAlt,
  FaCog,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";
import Link from "next/link";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import logo from "/src/images/logo.png";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen w-56 bg-gray-800 fixed top-0 left-0 overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center justify-center h-14 bg-slate-500 text-white">
        <span className="text-xl font-bold">
          <Image src={logo} width={200} height={100} alt="Logo" />
        </span>
      </div>
      <div className="flex flex-col items-center mt-8">
        <Link
          href="/ghostPayDashboard"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-4 pl-6"
        >
          <FaChartLine className="mr-2" />
          Dashboard
        </Link>
        <Link
          href="/Subscriptions"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-4 pl-6"
        >
          <FaMoneyBillAlt className="mr-2" />
          Subscriptions
        </Link>
        <Link
          href="/Support"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-4 pl-6"
        >
          <BiSupport className="mr-2" />
          Support
        </Link>
        <Link
          href="/Settings"
          className="flex items-center text-white opacity-75 hover:opacity-100 py-2 px-4 pl-6"
        >
          <FaCog className="mr-2" />
          Settings
        </Link>
      </div>
      <div className="flex flex-col items-center mt-auto mb-5">
        <div className="flex space-x-2">
          <a href="#">
            <FaTwitter className="text-white opacity-75 hover:opacity-100" />
          </a>
          <a href="#">
            <FaGithub className="text-white opacity-75 hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Settings: React.FC = () => {
  const [username, setUsername] = useState(profileData.username);
  const [email, setEmail] = useState(profileData.email);
  const [password, setPassword] = useState(profileData.password);

  const [tempUsername, setTempUsername] = useState("");
  const [tempEmail, setTempEmail] = useState("");
  const [tempPassword, setTempPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempUsername(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTempPassword(event.target.value);
  };

  const handleConfirmChanges = () => {
    setUsername(tempUsername || username);
    setEmail(tempEmail || email);
    setPassword(tempPassword || password);
    setTempUsername("");
    setTempEmail("");
    setTempPassword("");
  };

  const handleCancelChanges = () => {
    setTempUsername("");
    setTempEmail("");
    setTempPassword("");
  };

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const transactions = [
    {
      id: 1,
      date: new Date(2023, 4, 31),
      amount: 50.0,
      description: "Purchase at XYZ Store",
    },
    {
      id: 2,
      date: new Date(2023, 4, 30),
      amount: 10.0,
      description: "Subscription renewal",
    },
  ];

  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="container mx-auto max-4x px-4 py-8 ml-60 max-w-5xl">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="mb-6">
            <h2 className="text-lg font-bold mb-2">Profile Information</h2>
            <p className="mb-2">
              <span className="font-bold">Username:</span>{" "}
              {tempUsername !== "" ? (
                <input
                  type="text"
                  value={tempUsername}
                  onChange={handleUsernameChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              ) : (
                <input
                  type="text"
                  value={username}
                  onChange={handleUsernameChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              )}
            </p>
            <p className="mb-2">
              <span className="font-bold">Password:</span>{" "}
              {tempPassword !== "" ? (
                <input
                  type={showPassword ? "text" : "password"}
                  value={tempPassword}
                  onChange={handlePasswordChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              ) : (
                <>
                  {showPassword ? (
                    <input
                      type="text"
                      value={password}
                      readOnly
                      className="border rounded px-2 py-1 ml-2"
                    />
                  ) : (
                    <input
                      type="password"
                      value={password}
                      readOnly
                      className="border rounded px-2 py-1 ml-2"
                    />
                  )}
                </>
              )}
              <button
                className="text-sm font-semibold ml-2 text-gray-600"
                onClick={toggleShowPassword}
              >
                {showPassword ? "Hide" : "Show"}
              </button>
            </p>
            <p className="mb-2">
              <span className="font-bold">Email:</span>{" "}
              {tempEmail !== "" ? (
                <input
                  type="email"
                  value={tempEmail}
                  onChange={handleEmailChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              ) : (
                <input
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                  className="border rounded px-2 py-1 ml-2"
                />
              )}
            </p>
            <p className="mb-2">
              <span className="font-bold">Birth Date:</span>{" "}
              {profileData.birthDate}
            </p>
            <p className="mb-2">
              <span className="font-bold">Country:</span> {profileData.country}
            </p>
          </div>
          {(tempUsername !== "" || tempEmail !== "" || tempPassword !== "") && (
            <div className="flex justify-end mt-4">
              <div className="mt-auto">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded mr-2 ml-10"
                  onClick={handleConfirmChanges}
                >
                  Confirm
                </button>
                <button
                  className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded ml-10"
                  onClick={handleCancelChanges}
                >
                  Cancel
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-bold mb-2">Transaction History</h2>
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Amount</th>
                <th className="py-2 px-4 border-b">Description</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="py-2 px-4 border-b text-center">
                    {transaction.date.toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {transaction.amount.toFixed(2)}
                  </td>
                  <td className="py-2 px-4 border-b text-center">
                    {transaction.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Settings;
