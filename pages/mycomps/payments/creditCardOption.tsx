import React, { useState } from "react";

const CreditCardOption: React.FC = () => {
  const [cardNumber, setCardNumber] = useState("");
  const [expiryDate, setExpiryDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handleCardNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formattedCardNumber = event.target.value
      .replace(/\s/g, "")
      .replace(/(\d{4})/g, "$1 ")
      .trim();
    setCardNumber(formattedCardNumber);
  };

  const handleExpiryDateChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const input = event.target.value.replace(/[^0-9]/g, "").slice(0, 4);
    let formattedExpiryDate = "";

    if (input.length > 2) {
      formattedExpiryDate = `${input.slice(0, 2)}/${input.slice(2)}`;
    } else {
      formattedExpiryDate = input;
    }

    setExpiryDate(formattedExpiryDate);
  };

  const handleCvvChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const formattedCvv = event.target.value.replace(/[^0-9]/g, "").slice(0, 3);
    setCvv(formattedCvv);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setCardNumber("");
    setExpiryDate("");
    setCvv("");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Credit Card Payment
      </h1>
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-6">
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="cardNumber"
            >
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter your card number"
              value={cardNumber}
              onChange={handleCardNumberChange}
              maxLength={19}
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-bold mb-2"
              htmlFor="expiryDate"
            >
              Expiry Date
            </label>
            <input
              type="text"
              id="expiryDate"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="MM/YY"
              value={expiryDate}
              onChange={handleExpiryDateChange}
              maxLength={5}
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-bold mb-2" htmlFor="cvv">
              CVV
            </label>
            <input
              type="text"
              id="cvv"
              className="border border-gray-300 rounded-md p-2 w-full"
              placeholder="Enter CVV"
              value={cvv}
              onChange={handleCvvChange}
              maxLength={3}
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

export default CreditCardOption;
