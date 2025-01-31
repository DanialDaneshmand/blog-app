"use client";
import vazirFont from "@/constants/localFont";
import "./styles/globals.css";
import Header from "@/components/Header";
import { Toaster } from "react-hot-toast";
import UserProvider from "@/context/userContext";
import ReactQueryProvider from "@/providers/ReactQueryProvider";

// export const metadata = {
//   title: {
//     template: "%s|بلاگ اپ",
//     default: "بلاگ اپ",
//   },
//   description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
// };

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <Toaster />
        <ReactQueryProvider>
          <UserProvider>
            <div className="  w-full">{children}</div>
          </UserProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
