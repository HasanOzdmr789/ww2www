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
import { SiBinance, SiTether,SiNetflix } from "react-icons/si";
import { BiSupport } from "react-icons/bi";
import Image from "next/image";
import logo from "src/images/logo.png";

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
          0x8732134242320984923
        </>
      ),
    },
    {
      value: "bsc",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x2879332332483979073
        </>
      ),
    },
    {
      value: "option3",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x07621732176231432784
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
      value: "tether",
      label: (
        <>
          <SiTether className="mr-1" />
          USDT
        </>
      ),
    },
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

const upcomingPaymentsData = [
  {
    platform: "Youtube",
    orderDate: "2023-06-10",
    paymentStartDate: "2023-06-15",
    paymentPeriod: "Monthly",
    paymentDate: "2023-08-15",
    price: "$12",
    daysLeft: 26,
    icon: <FaYoutube />,
  },
  {
    platform: "Twitter",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-08-17",
    price: "$14",
    daysLeft: 28,
    icon: <FaTwitter />,
  },
  {
    platform: "Twitch",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-08-18",
    price: "$13",
    daysLeft: 29,
    icon: <FaTwitch />,
  },
  {
    platform: "Netflix",
    orderDate: "2023-06-01",
    paymentStartDate: "2023-06-01",
    paymentPeriod: "Monthly",
    paymentDate: "2023-08-01",
    price: "$23",
    daysLeft: 12,
    icon: <SiNetflix />,
  },
  {
    platform: "Amazon",
    orderDate: "2023-06-21",
    paymentStartDate: "2023-06-23",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-23",
    price: "$9",
    daysLeft: 3,
    icon: <FaAmazon />,
  },
  {
    platform: "Linkedin",
    orderDate: "2023-06-25",
    paymentStartDate: "2023-06-27",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-28",
    price: "$5",
    daysLeft: 8,
    icon: <FaLinkedinIn />,
  },
];

const UpcomingPayments: React.FC = () => {
  const nearestDate = upcomingPaymentsData.reduce((prev, current) => {
    return prev.daysLeft < current.daysLeft ? prev : current;
  }).daysLeft;

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <h2 className="text-lg font-bold">Upcoming Payments</h2>
          <span className="text-sm">
            Nearest Date: {nearestDate?.toString()}
          </span>
        </div>
        <div className="px-4 py-2">
          <table className="w-full">
            <thead>
              <tr>
                <th className="py-2">Platforms</th>
                <th className="py-2">Order Date</th>
                <th className="py-2">Payment Start Date</th>
                <th className="py-2">Payment Period</th>
                <th className="py-2">Payment Date</th>
                <th className="py-2">Price</th>
                <th className="py-2">Days Left</th>
              </tr>
            </thead>
            <tbody>
              {upcomingPaymentsData.map((payment, index) => (
                <tr key={index} className="border-b border-gray-200">
                  <td className="flex items-center py-2">
                    {payment.icon}
                    <span className="ml-2 text-center">{payment.platform}</span>
                  </td>
                  <td className="py-2 text-center">{payment.orderDate}</td>
                  <td className="py-2 text-center">
                    {payment.paymentStartDate}
                  </td>
                  <td className="py-2 text-center">{payment.paymentPeriod}</td>
                  <td className="py-2 text-center">{payment.paymentDate}</td>
                  <td className="py-2 text-center">{payment.price}</td>
                  <td className="py-2 text-center">{payment.daysLeft} days</td>
                </tr>
              ))}
            </tbody>
          </table>
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

const Subscriptions: React.FC = () => {
  return (
    <div>
      <div>
        <Sidebar />
      </div>
      <div className="container mx-auto px-40 py-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold mb-6 relative ml-20">
            Subscriptions
            <DropdownList1 />
            <DropdownList2 />
          </h1>
        </div>

        <div className="ml-56 mt-14">
          <UpcomingPayments />
        </div>
      </div>
    </div>
  );
};

export default Subscriptions;
