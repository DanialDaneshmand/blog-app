"use client";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import React from "react";
import { HiMagnifyingGlass } from "react-icons/hi2";

function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const search = e.target.search;
    const searchValue = search.value;
    const newParams = new URLSearchParams(searchParams.toString());
    if (searchValue) {
      newParams.set("search", searchValue);
    } else {
      newParams.delete("search");
    }
    router.push(`${pathname}?${newParams.toString()}`, { scroll: false });
  };
  return (
    <div className="  w-full">
      <form onSubmit={handleSubmit} className="  flex items-center ">
        <input
          type="text"
          name="search"
          placeholder="جستجو ..."
          autoComplete="off"
          className=" outline-none block w-full  border rounded-xl focus:border-slate-700 border-slate-300 p-2 focus:shadow-lg"
        />
        <button
          style={{ marginRight: "-25px" }}
          type="submit"
          className="  text-slate-500"
        >
          <HiMagnifyingGlass />
        </button>
      </form>
    </div>
  );
}

export default Search;
