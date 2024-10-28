import React from "react";

const SubmitEmail = ({ isSubscribed, setIsSubscribed }) => {
  return (
    <div className="flex mx-auto justify-center items-center ">
        <div className="bg-white h-[300px] w-[400px]  p-4 text-center rounded-2xl ">
            <div className=" pb-12 " >
                <img className="mx-auto pb-3" src="src/assets/images/icon-success.svg" alt="check mark" />
                <h1>Thanks for subscribing!</h1>
                <p>
                A confirmation email has been sent. please open it and click the
                button inside to confirm your subscription.
                </p>
            </div>
            <button
                className=" bg-mainColor text-white hover:bg-orange-500 ease-in-out font-roboto font-semibold p-4 rounded-xl border-none"
                onClick={(e) => setIsSubscribed(false)}>
                Dismiss message
            </button>
        </div>

    </div>
  );
};

export default SubmitEmail;