"use client";
import useCategories from "@/hooks/useCategories";
import ButtonIcon from "@/ui/ButtonIcon";
import FileInput from "@/ui/FileInput";
import RHFSelect from "@/ui/RHFSelect";
import RHFTextField from "@/ui/RHFTextField";
import { yupResolver } from "@hookform/resolvers/yup";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { HiOutlineXMark } from "react-icons/hi2";
import * as yup from "yup";
import useCreatePost from "../hooks/useCreatePost";
import SvgComponent from "@/ui/SvgComponent";
import { useRouter } from "next/navigation";
import useEditPost from "../hooks/useEditPost";
import { imageUrlToFile } from "@/hooks/fileFormatter";

const schema = yup
  .object({
    title: yup
      .string()
      .min(5, "حداقل ۵ کاراکتر را وارد کنید")
      .required("عنوان ضروری است"),
    briefText: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    text: yup
      .string()
      .min(5, "حداقل ۱۰ کاراکتر را وارد کنید")
      .required("توضیحات ضروری است"),
    slug: yup.string().required("اسلاگ ضروری است"),
    readingTime: yup
      .number()
      .positive()
      .integer()
      .required("زمان مطالعه ضروری است")
      .typeError("یک عدد را وارد کنید"),
    category: yup.string().required("دسته بندی ضروری است"),
  })
  .required();

function CreatePostPage({ postToEdit }) {
    const { _id: editId } = postToEdit||false;
  const isEditSession = Boolean(editId);
  const {
    title,
    text,
    briefText,
    slug,
    readingTime,
    category,
    coverImage,
    coverImageUrl: prevPostCoverImageUrl,
  } = postToEdit||{};
  let editValues = {};
  if (isEditSession) {
    editValues = {
      title,
      text,
      briefText,
      slug,
      readingTime,
      category: category._id,
      coverImage,
    };
  }
  const { categories } = useCategories();
  const [coverImageUrl, setCoverImageUrl] = useState(
    prevPostCoverImageUrl || {}
  );
  const { isCreating, createPost } = useCreatePost();
  const { editPost, isEditing } = useEditPost();
  const router = useRouter();

  const {
    setValue,
    control,
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm({
    resolver: yupResolver(schema),
    mode: "onTouched",
    defaultValues: editValues,
  });

  const submitHandler = (data) => {
    const formData = new FormData();
    for (const key in data) {
      formData.append(key, data[key]);
    }
    if (isEditSession) {
      editPost(
        { id: editId, data: formData },
        {
          onSuccess: () => {
            reset();
            router.push("/profile/posts");
          },
        }
      );
    } else {
      createPost(formData, {
        onSuccess: () => {
          router.push("/profile/posts");
        },
      });
    }
  };
  useEffect(() => {
    if (prevPostCoverImageUrl) {
      async function fetchMyAPI() {
        const file = await imageUrlToFile(prevPostCoverImageUrl);
        setValue("coverImage", file);
      }
      fetchMyAPI();
    }
  }, []);
  return (
    <form onSubmit={handleSubmit(submitHandler)}>
      <RHFTextField
        label="عنوان"
        name="title"
        register={register}
        required
        errors={errors}
        classes="border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm"
      />
      <RHFTextField
        label="متن کوتاه"
        name="briefText"
        register={register}
        required
        errors={errors}
        classes="border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm"
      />
      <RHFTextField
        label="متن"
        name="text"
        register={register}
        required
        errors={errors}
        classes="border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm"
      />
      <RHFTextField
        label="اسلاگ"
        name="slug"
        register={register}
        required
        errors={errors}
        classes="border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm"
      />
      <RHFTextField
        label="زمان مطالعه"
        name="readingTime"
        register={register}
        required
        errors={errors}
        classes="border hover:border-blue-300 p-3 focus:border-blue-300 hover:shadow-blue-300 hover:shadow-sm focus:shadow-blue-300 focus:shadow-sm"
      />

      <RHFSelect
        label="دسته بندی"
        isRequired={true}
        name="category"
        register={register}
        options={categories || []}
      />
      <Controller
        control={control}
        name="coverImage"
        rules={{ require: "کاور پست الزامی است" }}
        render={({ field: { onChange, value, ...rest } }) => (
          <FileInput
            {...rest}
            errors={errors}
            label="کاور پست"
            name="coverImage"
            value={value?.fileName}
            classes="cursor-pointer dark:bg-slate-500 border-2 mt-10 mb-5  border-blue-600 rounded-lg px-3 py-2 text-blue-600 flex items-center justify-center gap-x-2"
            onChange={(event) => {
              const file = event.target.files[0];
              onChange(file);
              setCoverImageUrl(URL.createObjectURL(file));
              event.target.value = null;
            }}
          />
        )}
      />
      {coverImageUrl && (
        <div className=" relative overflow-hidden aspect-video rounded-lg">
          <Image
            fill
            alt="coverImage"
            src={coverImageUrl}
            className=" object-cover object-center "
          />
          <button
            onClick={() => {
              setCoverImageUrl(null);
              setValue("coverImage", null);
            }}
            className=" rounded-lg absolute top-2 left-2 z-30 text-red-400 bg-[#efefef] hover:text-[#efefef] hover:bg-red-400 text-sm sm:text-xl p-1"
          >
            <HiOutlineXMark />
          </button>
        </div>
      )}
      {isCreating ? (
        <SvgComponent />
      ) : (
        <button
          type="submit"
          className="p-2 w-full rounded-lg bg-blue-600 text-white mt-4"
        >
          تایید
        </button>
      )}
    </form>
  );
}

export default CreatePostPage;
