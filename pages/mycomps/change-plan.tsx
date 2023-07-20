import React, { useState } from "react";
import router from "next/router";

const SubscriptionChangePage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState("");

  const handlePlanChange = (plan: string) => {
    setSelectedPlan(plan);
  };

  const handleConfirmSubscription = () => {
    router.push("/Profile");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Change Subscription</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-4">Select a Plan</h2>
        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="basic"
            value="basic"
            checked={selectedPlan === "basic"}
            onChange={() => handlePlanChange("basic")}
            className="h-4 w-4 rounded-full border-gray-300 focus:ring-green-500"
          />
          <label
            htmlFor="basic"
            className="ml-3 text-lg font-bold cursor-pointer"
          >
            Spotify Free
          </label>
          <p className="text-gray-600 ml-6">
            Play shuffle listen with commercials.
          </p>
          <p className="text-green-500 ml-6">Free</p>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="premium"
            value="premium"
            checked={selectedPlan === "premium"}
            onChange={() => handlePlanChange("premium")}
            className="h-4 w-4 rounded-full border-gray-300 focus:ring-green-500"
          />
          <label
            htmlFor="premium"
            className="ml-3 text-lg font-bold cursor-pointer"
          >
            Premium Duo
          </label>
          <p className="text-gray-600 ml-6">
            Two separate Premium accounts for two people living together.
          </p>
          <p className="text-green-500 ml-6">39.99 TL/month</p>
        </div>

        <div className="flex items-center mb-4">
          <input
            type="radio"
            id="family"
            value="family"
            checked={selectedPlan === "family"}
            onChange={() => handlePlanChange("family")}
            className="h-4 w-4 rounded-full border-gray-300 focus:ring-green-500"
          />
          <label
            htmlFor="family"
            className="ml-3 text-lg font-bold cursor-pointer"
          >
            Family Plan
          </label>
          <p className="text-gray-600 ml-6">
            6 separate Premium accounts for people living together.
          </p>
          <p className="text-green-500 ml-6">49.99 TL/month</p>
        </div>
      </div>

      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mt-6"
        onClick={handleConfirmSubscription}
      >
        Confirm Subscription Change
      </button>
    </div>
  );
};

export default SubscriptionChangePage;
