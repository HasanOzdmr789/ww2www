import { useRouter } from "next/router";
import React from "react";

const EditPaymentMethodPage: React.FC = () => {
  const router = useRouter();

  const handleButtonClick = (option: string) => {
    let route = "";

    if (option === "creditCardOption") {
      route = "/mycomps/payments/creditCardOption";
    } else if (option === "mobilePaymentOption") {
      route = "/mycomps/payments/mobilePaymentOption";
    } else if (option === "ghostPayOption") {
      route = "/mycomps/payments/ghostPayOption";
    }
    router.push(route);
  };

  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-4xl max-h-max bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-r bg-blue-100">
            <div className="bg-slate-400 rounded-full p-2 mb-6">
              <h1 className="text-3xl font-bold">Choose a Payment Method</h1>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              <button
                className=" bg-green-600 hover:bg-spotify-green-dark text-white font-bold py-4 px-8 rounded border border-transparent"
                onClick={() => handleButtonClick("creditCardOption")}
              >
                Credit or Debit Card
              </button>
              <button
                className="bg-green-600 hover:bg-spotify-blue-dark text-white font-bold py-4 px-8 rounded border border-transparent"
                onClick={() => handleButtonClick("mobilePaymentOption")}
              >
                Mobile Payment
              </button>
              <button
                className="bg-blue-400 hover:bg-spotify-yellow-dark text-white font-bold py-4 px-8 rounded border border-transparent"
                onClick={() => handleButtonClick("ghostPayOption")}
              >
                ghostPay 👻
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditPaymentMethodPage;
