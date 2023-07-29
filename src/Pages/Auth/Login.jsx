import React from "react";
import { Link } from "react-router-dom";
import Input from "../../Components/Form/Input";

const Login = () => {
  return (
    <div className="loginwrapper">
      <div className="lg-inner-column">
        <div className="left-column relative z-[1]">
          <div className="max-w-[520px] pt-20 ltr:pl-20 rtl:pr-20">
            <a
              aria-current="page"
              href="/"
              className="router-link-active router-link-exact-active"
            >
              <img src="/assets/logo-60c41eaa.svg" alt className="mb-10" />
            </a>
            <h4>
              {" "}
              Unlock your Project{" "}
              <span className="text-slate-800 dark:text-slate-400 font-bold">
                performance
              </span>
            </h4>
          </div>
          <div className="absolute left-0 2xl:bottom-[-160px] bottom-[-130px] h-full w-full z-[-1]">
            <img
              src="/assets/ils1-488442d7.svg"
              alt
              className="h-full w-full object-contain"
            />
          </div>
        </div>
        <div className="right-column relative">
          <div className="inner-content h-full flex flex-col bg-white dark:bg-slate-800">
            <div className="auth-box h-full flex flex-col justify-center">
              <div className="mobile-logo text-center mb-6 lg:hidden block">
                <a
                  aria-current="page"
                  href="/"
                  className="router-link-active router-link-exact-active"
                >
                  <img
                    src="/assets/logo-60c41eaa.svg"
                    alt
                    className="mx-auto"
                  />
                </a>
              </div>
              <div className="text-center 2xl:mb-10 mb-4">
                <h4 className="font-medium">Sign in</h4>
                <div className="text-slate-500 text-base">
                  {" "}
                  Sign in to your account to start using Dashcode{" "}
                </div>
              </div>
              <form className="space-y-4">
                <div className="fromGroup relative">
                  <label
                    className="ltr:inline-block rtl:block input-label"
                    htmlFor="emil"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      name="emil"
                      placeholder="Type your email"
                      className="h-[48px] input-control w-full block focus:outline-none h-[40px]"
                      id="emil"
                    />
                    {/**/}
                    <div className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2">
                      {/**/}
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
                <div className="fromGroup relative">
                  <label
                    className="ltr:inline-block rtl:block input-label"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type="password"
                      name="password"
                      placeholder="8+ characters, 1 capitat letter "
                      className="h-[48px] input-control w-full block focus:outline-none h-[40px] ltr:pr-10 rtl:pl-10"
                      id="password"
                    />
                    {/**/}
                    <div className="flex text-xl absolute ltr:right-[14px] rtl:left-[14px] top-1/2 -translate-y-1/2">
                      <span className="cursor-pointer text-secondary-500">
                        <span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink"
                            aria-hidden="true"
                            role="img"
                            width="1em"
                            height="1em"
                            preserveAspectRatio="xMidYMid meet"
                            viewBox="0 0 24 24"
                            className="iconify iconify--heroicons-outline"
                          >
                            <g
                              fill="none"
                              stroke="currentColor"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                            >
                              <path d="M15 12a3 3 0 1 1-6 0a3 3 0 0 1 6 0Z" />
                              <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7c-4.477 0-8.268-2.943-9.542-7Z" />
                            </g>
                          </svg>
                        </span>
                      </span>
                      {/**/}
                      {/**/}
                    </div>
                  </div>
                  {/**/}
                  {/**/}
                  {/**/}
                </div>
                <div className="flex justify-between">
                  <label className="cursor-pointer flex items-start">
                    <input type="checkbox" className="hidden" />
                    <span className="h-4 w-4 border rounded flex-none inline-flex mr-3 relative top-1 transition-all duration-150 bg-slate-100 dark:bg-slate-600 border-slate-100 dark:border-slate-600">
                      {/**/}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 text-sm leading-6">
                      Keep me signed in
                    </span>
                  </label>
                  <a
                    href="/forgot-password"
                    className="text-sm text-slate-800 dark:text-slate-400 leading-6 font-medium"
                  >
                    Forgot Password?
                  </a>
                </div>
                <button
                  type="submit"
                  className="btn btn-dark block w-full text-center"
                >
                  {" "}
                  Sign in{" "}
                </button>
              </form>
              <div className="relative border-b-[#9AA2AF] border-opacity-[16%] border-b pt-6">
                <div className="absolute inline-block bg-white dark:bg-slate-800 dark:text-slate-400 left-1/2 top-1/2 transform -translate-x-1/2 px-4 min-w-max text-sm text-slate-500 font-normal">
                  {" "}
                  Or continue with{" "}
                </div>
              </div>
              <div className="max-w-[242px] mx-auto mt-8 w-full">
                <ul className="flex">
                  <li className="flex-1">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 bg-[#1C9CEB] text-white text-2xl flex-col items-center justify-center rounded-full"
                    >
                      <img src="/assets/tw-8afd612b.svg" alt />
                    </a>
                  </li>
                  <li className="flex-1">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 bg-[#395599] text-white text-2xl flex-col items-center justify-center rounded-full"
                    >
                      <img src="/assets/fb-f4743ced.svg" alt />
                    </a>
                  </li>
                  <li className="flex-1">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 bg-[#0A63BC] text-white text-2xl flex-col items-center justify-center rounded-full"
                    >
                      <img src="/assets/in-3ad0732e.svg" alt />
                    </a>
                  </li>
                  <li className="flex-1">
                    <a
                      href="#"
                      className="inline-flex h-10 w-10 bg-[#EA4335] text-white text-2xl flex-col items-center justify-center rounded-full"
                    >
                      <img src="/assets/gp-d450a6e0.svg" alt />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="md:max-w-[345px] mx-auto font-normal text-slate-500 dark:text-slate-400 mt-12 uppercase text-sm">
                {" "}
                Don’t have an account? Sign up{" "}
                <a
                  href="/register"
                  className="text-slate-900 dark:text-white font-medium hover:underline"
                >
                  {" "}
                  Sign up{" "}
                </a>
              </div>
            </div>
            <div className="auth-footer text-center">
              {" "}
              Copyright 2021, Dashcode All Rights Reserved.{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
