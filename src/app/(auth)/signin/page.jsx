"use client";
import TextFeild from "@/ui/TextFeild";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Link from "next/link";
import { useUser } from "@/context/userContext";

// export const metadata = {
//   title: "ثبت نام",
// };

const schema = yup
  .object({
    email: yup
      .string()
      .email("ایمیل نا معتبر است")
      .required("ایمیل الزامی است ."),
    password: yup.string().required("رمز عبور الزامی است ."),
  })
  .required();

function SignIn() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signin } = useUser();

  const submitHandler = async (data) => {
    await signin(data);
  };
  return (
    <div className=" w-full max-w-screen-sm sm:px-16  px-4">
      <h1 className=" text-2xl font-bold text-slate-700 my-8"> صفحه ورود</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextFeild
          register={register}
          isRequired={true}
          name="email"
          label="ایمیل"
          className="w-full hover:border-slate-300 focus:border-slate-300 hover:shadow-lg focus:shadow-lg"
          type="email"
          errors={errors}
          dir="ltr"
        />
        <TextFeild
          register={register}
          isRequired={true}
          name="password"
          label="رمز عبور"
          className="w-full hover:border-slate-300 focus:border-slate-300 hover:shadow-lg focus:shadow-lg"
          type="password"
          errors={errors}
          dir="ltr"
        />
        <div>
          {isLoading ? (
            <p>loading ...</p>
          ) : (
            <button
              type="submit"
              className="py-2 px-5 w-full bg-blue-600 rounded-lg text-white"
            >
              ورود
            </button>
          )}
        </div>
        <Link href="/signup" className=" text-slate-600 text-sm my-4 block">
          هنوز ثبت نام نکرده اید ؟
        </Link>
      </form>
    </div>
  );
}

export default SignIn;
