"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import profileData from "@/profileData";

const Profile: React.FC = () => {
  const router = useRouter();
  const [username, setUsername] = useState("asdfa");
  const [email, setEmail] = useState("asfdaf");
  const [birthDate, setBirthDate] = useState("03.11.2001");
  const [country, setCountry] = useState("Turkey");

  const handleEditClick = () => {
    router.push("/mycomps/edit-profile");
  };

  const handlePaymentMethodClick = () => {
    router.push("/mycomps/edit-payment-method");
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <div className="container mx-auto px-4 py-8 bg-slate-200 text-gray-800">
            <h1 className="text-4xl font-bold mb-6">Hello!</h1>
            <p className="text-lg text-gray-600 mb-8">
              Do you want to edit your profile? Or find an old playlist? Take a
              break from work? You can do it all here.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Account Overview</h2>
              <div className="grid grid-cols-2 gap-2 mb-4">
                <p>Username:</p>
                <p className="font-semibold">{profileData.username}</p>
                <p>Email:</p>
                <p className="font-semibold">{profileData.email}</p>
                <p>Birth Date:</p>
                <p className="font-semibold">{profileData.birthDate}</p>
                <p>Country or Region:</p>
                <p className="font-semibold">{profileData.country}</p>
              </div>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleEditClick}
              >
                Edit
              </button>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Your Plan</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p className="font-semibold">Premium Student</p>
                <p>
                  All premium benefits at a special price for college or
                  university students.
                </p>
                <p>
                  <Link href="/mycomps/plan-info" className="text-green-500">
                    Learn about your plan
                  </Link>
                </p>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">Payment:</h2>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <p>
                  Your next invoice is for 14.99 TL and will be charged on
                  20.06.2023 to your Mastercard ending in 123.
                </p>
                <p className="mt-2">
                  Expiration date: <span className="font-semibold">123123</span>
                </p>
              </div>
            </div>

            <div className="flex justify-between">
              <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded">
                <Link href="/mycomps/change-plan">Change Plan</Link>
              </button>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
                onClick={handlePaymentMethodClick}
              >
                <Link href="/mycomps/edit-payment-method">
                  Update Payment Method
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
