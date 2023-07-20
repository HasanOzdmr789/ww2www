import React, { useState } from "react";
import Link from "next/link";
import Select from "react-select";
import {
  FaChartLine,
  FaMoneyBillAlt,
  FaCog,
  FaEthereum,
  FaWallet,
  FaBitcoin,
  FaDollarSign,
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTwitch,
  FaAmazon,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";
import { SiBinance, SiNetflix } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import logo from "/src/images/logo.png";

const DropdownList1: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (selectedOption: { value: string }) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: "default", label: " " },
    {
      value: "eth",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x0000000000
        </>
      ),
    },
    {
      value: "bsc",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x1000000000
        </>
      ),
    },
    {
      value: "option3",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x2000000000
        </>
      ),
    },
  ];

  return (
    <div className="relative inline-block ml-10">
      <Select
        value={options.find((option) => option.value === selectedOption)}
        onChange={() => handleSelect}
        options={options}
        className="text-base"
      />
    </div>
  );
};

const DropdownList2: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelect = (selectedOption: { value: string }) => {
    setSelectedOption(selectedOption.value);
  };

  const options = [
    { value: "default", label: " " },
    {
      value: "eth",
      label: (
        <>
          <FaEthereum className="mr-1" />
          ETH
        </>
      ),
    },
    {
      value: "bsc",
      label: (
        <>
          <SiBinance className="mr-1" />
          BSC
        </>
      ),
    },
    {
      value: "option3",
      label: (
        <>
          <FaBitcoin className="mr-1" />
          BTC
        </>
      ),
    },
  ];

  return (
    <div className="relative inline-block ml-5">
      <Select
        value={options.find((option) => option.value === selectedOption)}
        onChange={() => handleSelect}
        options={options}
        className="text-base"
      />
    </div>
  );
};

const PortfolioSection: React.FC = () => {
  const tokens = [
    { name: "Bitcoin", price: "$25651", balance: "10", icon: <FaBitcoin /> },
    { name: "Ethereum", price: "$1553", balance: "20", icon: <FaEthereum /> },
    { name: "USDT", price: "$1.001", balance: "30", icon: <FaDollarSign /> },
  ];

  const portfolioValue = tokens.reduce(
    (total, token) =>
      total +
      parseInt(token.price.replace(/\$/g, "")) * parseInt(token.balance),
    0
  );

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <h2 className="text-lg font-bold">Assets</h2>
        </div>
        <div className="px-4 py-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Token</th>
                <th className="py-2">Price</th>
                <th className="py-2">Balance</th>
              </tr>
            </thead>
            <tbody>
              {tokens.map((token) => (
                <tr
                  key={token.name}
                  className="border-b text-center border-gray-200"
                >
                  <td className="flex items-center justify-center py-2">
                    <span className="mr-2">{token.icon}</span>
                    <span>{token.name}</span>
                  </td>
                  <td className="py-2">{token.price}</td>
                  <td className="py-2">{token.balance}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="bg-gray-200 px-4 py-3 flex justify-between">
          <div className="text-lg font-bold">Portfolio Value</div>
          <div className="text-lg font-bold">${portfolioValue}</div>
        </div>
        <div>
          <Platforms />
        </div>
      </div>
    </div>
  );
};

const Platforms: React.FC = () => {
  const socialMediaPlatforms = [
    {
      name: "Youtube",
      icon: <FaYoutube />,
      subscribed: true,
      url: "https://youtube.com",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      subscribed: true,
      url: "https://twitter.com",
    },
    {
      name: "Twitch",
      icon: <FaTwitch />,
      subscribed: false,
      url: "https://twitch.tv",
    },
    {
      name: "Netflix",
      icon: <SiNetflix />,
      subscribed: false,
      url: "https://netflix.com",
    },
    {
      name: "Amazon",
      icon: <FaAmazon />,
      subscribed: false,
      url: "https://amazon.com",
    },
    {
      name: "Linkedin",
      icon: <FaLinkedinIn />,
      subscribed: false,
      url: "https://linkedin.com",
    },
  ];

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <h2 className="text-lg font-bold">Platforms</h2>
        </div>
        <div className="flex flex-wrap justify-center py-4">
          {socialMediaPlatforms.map((platform) => (
            <a
              key={platform.name}
              href={platform.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center mx-2 mb-4"
            >
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center">
                {platform.icon}
              </div>
              <div className="text-sm mt-2 text-center">{platform.name}</div>
              {platform.subscribed ? (
                <div className="bg-gray-200 rounded-full px-2 mt-1 text-xs">
                  Subscribed
                </div>
              ) : (
                <button className="bg-white rounded-full px-2 mt-1 text-xs border border-gray-200">
                  Subscribe
                </button>
              )}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

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

const DashboardPage: React.FC = () => {
  return (
    <div className="flex">
      <div>
        <Sidebar />
      </div>
      <div className="container mx-auto px-40 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6 relative ml-20">
            Dashboard
            <DropdownList1 />
            <DropdownList2 />
          </h1>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className=" p-4 rounded-lg mb-6">
            <p className="text-lg font-bold ml-20">Your Portfolio</p>
          </div>
          <div className="grid gap-4">
            <div className="bg-gray-100 p-4 rounded-lg">
              <PortfolioSection />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
/*131; */

export default DashboardPage;
