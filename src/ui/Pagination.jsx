"use client";

import { generatePagination } from "@/utils/generatePagination";
import classNames from "classnames";
import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { HiArrowLeft, HiArrowLeftCircle, HiArrowRight } from "react-icons/hi2";

export default function Pagination({ totalPages }) {
  // const totalPages = Math.ceil(Number(length) / itemsPerPage);
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentPage = Number(searchParams.get("page")) || 1;
  const itemsPerPage = Number(searchParams.get("limit")) || 6;

  const createPageURL = (pageNumber) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", pageNumber.toString());
    params.set("limit", itemsPerPage.toString());
    return `${pathname}?${params.toString()}`;
  };

  const allPages = generatePagination(currentPage, totalPages);

  return (
    <div className=" gap-x-2 flex">
      <PaginationArrow
        direction="right"
        href={createPageURL(currentPage - 1)}
        isDisabled={currentPage <= 1}
      />

      <div className="flex -space-x-px">
        {allPages.map((page, index) => {
          // let position: "first" | "last" | "single" | "middle" | undefined;
          let position;
          if (index === 0) position = "first";
          if (index === allPages.length - 1) position = "last";
          if (allPages.length === 1) position = "single";
          if (page === "...") position = "middle";

          return (
            <PaginationNumber
              key={`${page}-${index}`}
              href={createPageURL(page)}
              page={page}
              position={position}
              isActive={currentPage === page}
            />
          );
        })}
      </div>

      <PaginationArrow
        direction="left"
        href={createPageURL(currentPage + 1)}
        isDisabled={currentPage >= totalPages}
      />
    </div>
  );
}

// position?: "first" | "last" | "middle" | "single",

function PaginationNumber({ page, href, isActive, position }) {
  const className = classNames(
    "flex  w-10 py-1 px-3  items-center justify-center text-sm border border-slate-400 text-slate-400",
    {
      "rounded-r-md": position === "first" || position === "single",
      "rounded-l-md": position === "last" || position === "single",
      "z-10 bg-blue-600 !border-blue-600 text-white": isActive,
      "hover:bg-slate-200": !isActive && position !== "middle",
      "text-slate-300": position === "middle",
    }
  );

  return isActive || position === "middle" ? (
    <div className={className}>{page}</div>
  ) : (
    <Link href={href} className={className}>
      {page}
    </Link>
  );
}

function PaginationArrow({ href, direction, isDisabled }) {
  const className = classNames(
    "flex h-10 w-10 items-center justify-center rounded-md border border-slate-400 text-slate-400",
    {
      "pointer-events-none text-slate-200 !border-slate-200":
        isDisabled,
      "hover:bg-slate-200": !isDisabled,
      "mr-2 md:mr-4": direction === "left",
      "ml-2 md:ml-4": direction === "right",
    }
  );

  const icon =
    direction === "left" ? (
      <HiArrowLeft  className="w-4" />
    ) : (
      <HiArrowRight  className="w-4" />
    );

  return isDisabled ? (
    <div className={className}>{icon}</div>
  ) : (
    <Link className={className} href={href}>
      {icon}
    </Link>
  );
}
