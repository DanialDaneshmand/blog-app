"use client";
import TextFeild from "@/ui/TextFeild";
import React from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useUser } from "@/context/userContext";

// export const metadata = {
//   title: "ثبت نام",
// };

const schema = yup
  .object({
    name: yup
      .string()
      .min(5, "نام و نام خانوادگی نامعتبر است.")
      .max(30)
      .required("نام و نام خانوادگی الزامی است ."),
    email: yup
      .string()
      .email("ایمیل نا معتبر است")
      .required("ایمیل الزامی است ."),
    password: yup.string().required("رمز عبور الزامی است ."),
  })
  .required();

function SignUp() {
  const {
    register,
    handleSubmit,
    formState: { errors, isLoading },
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
  });
  const { signup } = useUser();
  const submitHandler = async (data) => {
    await signup(data);
  };
  return (
    <div className=" w-full max-w-screen-sm sm:px-16  px-4">
      <h1 className=" text-2xl font-bold text-slate-700 my-8">ثبت نام</h1>
      <form onSubmit={handleSubmit(submitHandler)}>
        <TextFeild
          register={register}
          isRequired={true}
          name="name"
          label="نام و نام خانوادگی"
          className="w-full hover:border-slate-300 focus:border-slate-300 hover:shadow-lg focus:shadow-lg"
          errors={errors}
        />
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
              ثبت نام{" "}
            </button>
          )}
        </div>
        <Link href="/signin" className=" text-slate-600 text-sm my-4 block">
          صفحه ورود
        </Link>
      </form>
    </div>
  );
}

export default SignUp;
