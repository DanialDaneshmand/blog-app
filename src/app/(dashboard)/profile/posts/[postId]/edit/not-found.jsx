import Link from "next/link";
import { HiArrowLeft } from "react-icons/hi2";

export default function NotFound() {
  return (
    <main className="flex h-full flex-col items-center justify-center gap-2">
      <HiArrowLeft  className="w-10 text-slate-500" />
      <p>پستی با این مشخصات پیدا نشد</p>
      <Link
        href="/profile/posts"
        className="mt-4 rounded-md bg-primary-500 px-4 py-2 text-sm text-white transition-colors hover:bg-blue-600"
      >
        برگشت
      </Link>
    </main>
  );
}
