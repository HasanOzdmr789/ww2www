import React, { useState } from "react";

const MobilePaymentOption: React.FC = () => {
  const [operator, setOperator] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleOperatorChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOperator(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.replace(/[^0-9]/g, "").slice(0, 10);
    const formattedPhoneNumber = input.replace(
      /(\d{3})(\d{3})(\d{4})/,
      "($1) $2-$3"
    );
    setPhoneNumber(formattedPhoneNumber);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setOperator("");
    setPhoneNumber("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Mobile Payment</h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="operator"
            >
              Operator
            </label>
            <select
              id="operator"
              className="border border-gray-300 rounded-md p-2 w-full"
              value={operator}
              onChange={handleOperatorChange}
            >
              <option value="">Select an operator</option>
              <option value="Operator 1">Turkcell</option>
              <option value="Operator 2">Vodafone</option>
              <option value="Operator 3">Türk Telekom</option>
            </select>
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="phoneNumber"
            >
              Phone Number
            </label>
            <input
              type="text"
              id="phoneNumber"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your phone number"
              value={phoneNumber}
              onChange={handlePhoneNumberChange}
              maxLength={14}
            />
          </div>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
            Pay Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default MobilePaymentOption;
