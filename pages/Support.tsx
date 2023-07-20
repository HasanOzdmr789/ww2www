import React, { useState } from "react";
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
import logo from "src/images/logo.png";

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
          <a href="https://twitter.com/melkecelioglu">
            <FaTwitter className="text-white opacity-75 hover:opacity-100" />
          </a>
          <a href="https://github.com/melkecelioglu/ghostPay">
            <FaGithub className="text-white opacity-75 hover:opacity-100" />
          </a>
        </div>
      </div>
    </div>
  );
};

const Support: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: { preventDefault: () => void }) => {
    event.preventDefault();
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="flex">
      <Sidebar />

      <div className="flex flex-col items-center ml-60 p-20">
        <div className="bg-gray-100 rounded-lg p-4 mb-4">
          <h1 className="bg-gray-400 text-white px-4 py-2 mb-4 rounded-t-lg">
            Contact Support
          </h1>
          <form onSubmit={handleSubmit} className="mt-4">
            <div className="mb-4">
              <label htmlFor="name">Name:</label>
              <input
                type="text"
                id="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message">Message:</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full rounded-lg"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Support;
