"use client"

import { useRouter } from "next/navigation";
import State from "./State";

export default function Home() {

  const router = useRouter();

  return (
    <main>
      <State />

      {/* btn */}
      <button onClick={() => router.push('/userList')} type="button" className="py-2 px-5 bg-blue-700 text-white mt-5">Location Address</button>
    </main>
  );
}
