"use client";

import { authClient } from "@/lib/auth-client";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";

const Register = () => {
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSubmitForm = async (data) => {
    const { name, email, password, photo } = data;

    const { data: res, error } = await authClient.signUp.email({
      name,
      email,
      password,
      image: photo,
      callbackURL: "/",
    });

    if (error) {
      toast.error(error.message);
    }

    if (res) {
      toast.success("signUp successfully");
    }
  };

  return (
    <div className="bg-slate-200 py-20 px-5">
      <div className="bg-white lg:w-1/2 mx-auto  py-19 rounded-lg px-3 lg:px-0">
        <h2 className="mb-5 text-center text-[#403F3F] font-semibold lg:text-[35px] text-2xl">
          Register your account
        </h2>
        <form
          onSubmit={handleSubmit(handleSubmitForm)}
          className="lg:w-1/2 mx-auto space-y-4"
        >
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Name</legend>
            <input
              type="text"
              className="input  bg-slate-100 w-full"
              placeholder="John Doe"
              {...register("name", {
                required: "Name field cannot be empty",
              })}
            />
            {errors.name && (
              <p className="text-red-500 font-semibold">
                {errors.name.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Photo Url</legend>
            <input
              type="text"
              className="input  bg-slate-100 w-full"
              placeholder="Enter photo Url"
              {...register("photo", {
                required: "Photo url field cannot be empty",
              })}
            />
            {errors.photo && (
              <p className="text-red-500 font-semibold">
                {errors.photo.message}
              </p>
            )}
          </fieldset>
          <fieldset className="fieldset ">
            <legend className="fieldset-legend">Email </legend>
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
          <fieldset className="fieldset relative">
            <legend className="fieldset-legend">Password</legend>
            <input
              type={isPasswordShow ? "text" : "password"}
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
            <span
              onClick={() => setIsPasswordShow(!isPasswordShow)}
              className="absolute right-2 top-4 cursor-pointer"
            >
              {isPasswordShow ? <FaEye size={20} /> : <FaEyeSlash size={20} />}
            </span>
          </fieldset>
          <button className="btn bg-pink-500 w-full text-white font-semibold">
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default Register;
