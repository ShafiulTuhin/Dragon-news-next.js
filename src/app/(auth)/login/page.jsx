"use client";
import Link from "next/link";
import React from "react";
import { useForm } from "react-hook-form";

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const handleSubmitForm = (data) => console.log(data);

  return (
    <div className="bg-slate-200 py-20 px-5">
      <div className="bg-white lg:w-1/2 mx-auto  py-19 rounded-lg px-3 lg:px-0">
        <h2 className="mb-5 text-center text-[#403F3F] font-semibold lg:text-[35px] text-2xl">
          Login your account
        </h2>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="lg:w-1/2 mx-auto space-y-4"
        >
          {" "}
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Email address</legend>
            <input
              type="email"
              className="input  bg-slate-100 w-full"
              placeholder="email@email.com"
              {...register("email", {
                required: "Email field cannot be empty",
              })}
            />
            {errors.email && (
              <p className="text-red-500 font-semibold">
                {errors.email.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend">Password</legend>
            <input
              type="password"
              className="input bg-slate-100 w-full"
              placeholder="Type here"
              {...register("password", {
                required: "Password cannot be empty",
              })}
            />
            {errors.password && (
              <p className="text-red-500 font-semibold">
                {errors.password.message}
              </p>
            )}
          </fieldset>
          <button className="btn bg-pink-500 w-full text-white font-semibold">
            Login
          </button>
        </form>
        <p className="text-center mt-4">
          Dont’t Have An Account ?
          <Link href={"/register"}>
            <span className="text-pink-500 font-semibold"> Register</span>{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
