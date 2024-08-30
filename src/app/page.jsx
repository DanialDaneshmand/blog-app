import Link from "next/link";

export const metadata = {
  title: " خانه -وب اپلیکیشن مدیریت بلاگ ",
};

export default function Home() {
  return (
    <div className="flex flex-col items-center gap-8 py-16 px-2 ">
      <h1 className=" text-2xl sm:text-4xl font-bold text-slate-800 mb-8">
        اپلیکیشن مدیریت بلاگ{" "}
      </h1>

      <div className=" text-slate-500 text-sm sm:text-md">
        <p>جایی که قراره بتونی یه اپلیکشن کامل بلاگ رو مدیریت کنی !</p>
        <p>بتونی بلاگ بسازی-کامنت بذاری و درپنلت همه اتفاقا رو رصد کنی !</p>
      </div>
      <div className="flex gap-x-4">
        <button className="border  block px-3 py-2 outline-none text-sm rounded-xl text-slate-400 ">
          <Link href="/blogs" className=" py-8">
            مطالعه بلاگ ها
          </Link>
        </button>
        <button className="border border-blue-700 bg-blue-700   block px-3 py-2 outline-none text-sm rounded-xl text-white ">
          <Link href="/profile" className=" py-8">
            مدیریت بلاگ ها
          </Link>
        </button>
      </div>
    </div>
  );
}
