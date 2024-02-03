"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const pathname = usePathname();
  // console.log(pathname);

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* navlink */}
        <div className="bg-gray-400">
          <ul className="flex justify-center items-center gap-5 py-4">
            <li className="text-gray-900 hover:text-white transition-all">
              <Link className={`${pathname === '/' ? 'active' : ''}`} href={"/"}>Home</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link className={`${pathname === '/about' ? 'active' : ''}`} href={"/about"}>About</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link className={`${pathname === '/userList' ? 'active' : ''}`} href={"/userList"}>userList</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link className={`${pathname === '/contact' ? 'active' : ''}`} href={"/contact"}>Contact</Link>
            </li>
            <li className="text-gray-900 hover:text-white transition-all">
              <Link className={`${pathname === '/signup' ? 'active' : ''}`} href={"/signup"}>Signup</Link>
            </li>
          </ul>
        </div>

        {/* children */}
        {children}
      </body>
    </html>
  );
}
