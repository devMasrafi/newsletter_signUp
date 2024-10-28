import React, { useState } from "react";
import SubmitEmail from "./SubmitEmail";

const NewsLeter = () => {
  const [email, setEmail] = useState();
  const [isSubscribed, setIsSubscribed] = useState(false);

  const handleSubmit = (e) => {
    setIsSubscribed(true);
    e.preventDefault();
    console.log("before", isSubscribed);
    setEmail("");
    console.log("after", isSubscribed);
  };

  return (
    <div className="bg-mainColor">
      <div className="py-[120px] h-screen font-roboto ">
        {isSubscribed ? (
          <SubmitEmail
            isSubscribed={isSubscribed}
            setIsSubscribed={setIsSubscribed}
          />
        ) : (
          <div className="flex justify-center items-center bg-slate-100 w-[850px] mx-auto rounded-2xl ">
            <div className="px-4 ">
              <h1 className="font-roboto font-bold text-[54px]  ">
                Stay updated!
              </h1>
              <p>Join 60,000+ product managers reciving monthly updates on:</p>
              <ul className=" pt-3 pb-3 ">
                <li className="flex justify-start items-center ">
                  <img
                    className="pr-2 "
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  Product discorvery and building what matters
                </li>
                <li className="flex justify-start items-center ">
                  <img
                    className="pr-2 "
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  measuring to ensure updates are a success
                </li>
                <li className="flex justify-start items-center ">
                  <img
                    className="pr-2 "
                    src="/images/icon-list.svg"
                    alt=""
                  />
                  And much more!
                </li>
              </ul>
              <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                <input
                  className="p-1 rounded-md border-none "
                  type="email"
                  placeholder="example@example.com"
                  name="email"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="bg-mainColor text-white hover:bg-orange-500 ease-in-out rounded px-2 py-1 "
                  type="submit">
                  submit
                </button>
              </form>
            </div>
            <div className="">
              <img className=""
                src="./images/illustration-sign-up-desktop.svg"
                alt="sign-up image"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsLeter;