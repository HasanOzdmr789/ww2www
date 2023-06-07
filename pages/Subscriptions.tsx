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
          0x0000000000
        </>
      ),
    },
    {
      value: "bsc",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x100000000000000
        </>
      ),
    },
    {
      value: "option3",
      label: (
        <>
          <FaWallet className="mr-1" />
          0x1122222222230
        </>
      ),
    },
  ];

  return (
    <div className="relative inline-block ml-10">
      <Select
        value={options.find((option) => option.value === selectedOption)}
        onChange={handleSelect}
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
        onChange={handleSelect}
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
    paymentDate: "2023-07-15",
    price: "$50",
    daysLeft: 5,
    icon: <FaYoutube />,
  },
  {
    platform: "Twitter",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-17",
    price: "$40",
    daysLeft: 7,
    icon: <FaTwitter />,
  },
  {
    platform: "Twitch",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-17",
    price: "$40",
    daysLeft: 7,
    icon: <FaTwitch />,
  },
  {
    platform: "Netflix",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-17",
    price: "$40",
    daysLeft: 7,
    icon: <SiNetflix />,
  },
  {
    platform: "Amazon",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-17",
    price: "$40",
    daysLeft: 7,
    icon: <FaAmazon />,
  },
  {
    platform: "Linkedin",
    orderDate: "2023-06-12",
    paymentStartDate: "2023-06-17",
    paymentPeriod: "Monthly",
    paymentDate: "2023-07-17",
    price: "$40",
    daysLeft: 7,
    icon: <FaLinkedinIn />,
  },
];

const UpcomingPayments: React.FC = () => {
  const nearestDate = upcomingPaymentsData.reduce((nearest, payment) => {
    const currentDate = new Date();
    const paymentDate = new Date(payment.paymentDate);

    if (!nearest || paymentDate < nearest) {
      return paymentDate;
    }
    return nearest;
  }, null);

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-3xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <h2 className="text-lg font-bold">Upcoming Payments</h2>
          <span className="text-sm">
            Nearest Date: {nearestDate?.toLocaleDateString()}
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
