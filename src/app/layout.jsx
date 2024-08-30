import vazirFont from "@/constants/localFont";
import "./styles/globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: {
    template:"%s|بلاگ اپ",
    default:"بلاگ اپ"
  },
  description: "وب اپلیکیشن مدیریت بلاگ ها و نظرات کاربران",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${vazirFont.variable} font-sans min-h-screen`}>
        <div><Header/></div>
        <div className=" container xl:max-w-screen-xl">{children}</div>
        <div></div>
      </body>
    </html>
  );
}
