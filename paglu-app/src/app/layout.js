import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Paglu App - Website",
  description: "Our Paglu App is a simple web application",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navlink */}
        <div className="bg-gray-400">
          <ul className="flex justify-center items-center gap-5 py-4">
            <li className="text-gray-900 hover:text-white transition-all">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link href={"/userList"}>userList</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link href={"/contact"}>Contact</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>

        {/* children */}
        {children}
      </body>
    </html>
  );
}
