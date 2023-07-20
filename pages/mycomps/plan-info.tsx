import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const planInfo: React.FC = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const handleTurnClick = () => {
    router.push("/Profile");
  };
  return (
    <div className="flex justify-center mt-5">
      <div className="w-full max-w-5xl bg-white shadow-md rounded-lg overflow-hidden">
        <div className="bg-gray-200 px-4 py-3">
          <div className="container mx-auto px-4 py-8 bg-slate-200 text-gray-800">
            <h1 className="text-4xl font-bold mb-6">Premium Student</h1>
            <p className="text-lg text-gray-600 mb-8">
              Get more information about Spotify Premium Student plan and learn
              how to submit.
            </p>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                What is the Spotify Premium Student Plan?
              </h2>
              <p>
                Spotify Premium Student Plan, students at college or university
                Spotify Premium benefits available at a special price for lets
                you take advantage of it.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                How to Register as a Premium Student?
              </h2>
              <p>
                Follow the steps below to sign up for the Spotify Premium
                Student plan.
              </p>
              <ol className="list-decimal pl-6 mt-4">
                <li>
                  <span className="font-semibold">Step 1:</span> Spotify Premium
                  Visit the student page.
                </li>
                <li>
                  <span className="font-semibold">Step 2:</span> Click to the
                  {`'`}Register Now{`'`} button and log into your Spotify
                  account.
                </li>
                <li>
                  <span className="font-semibold">Step 3:</span> Choose your
                  university and enter the required information.
                </li>
                <li>
                  <span className="font-semibold">Step 4:</span> Verify your
                  student ID.
                </li>
                <li>
                  <span className="font-semibold">Step 5:</span> Choose the
                  payment method and pay.
                </li>
              </ol>
              <p className="mt-4">
                For more details, please{" "}
                <Link
                  href="https://support.spotify.com/tr-tr/article/premium-student/"
                  className="text-blue-500"
                >
                  visit the Spotify Student Premium Page.
                </Link>{" "}
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                How can you identify that you are a student?
              </h2>
              <p>
                Spotify via UNiDAYS to verify your student ID cooperates.
                student using your UNiDAYS account You can verify that you{`'`}
                re on and sign up for the Spotify Premium Student plan. You can
                sign up.
              </p>
              <p className="mt-4">
                For more details, please{" "}
                <Link
                  href="https://support.spotify.com/tr-tr/article/premium-student/"
                  className="text-blue-500"
                >
                  learn how to identify that
                </Link>{" "}
                you{`'`}re a student.
              </p>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-bold mb-2">
                Frequently Asked Questions
              </h2>
              <p>
                To learn more about the Spotify Premium Student plan You can
                visit our frequently asked questions page.{" "}
              </p>
              <p className="mt-4">
                For more details, please{" "}
                <Link
                  href="https://support.spotify.com/tr-tr/article/premium-student/"
                  className="text-blue-500"
                >
                  Frequently Asked Questions
                </Link>{" "}
                visit our page.
              </p>
              <button
                className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleTurnClick}
              >
                Turn back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default planInfo;
