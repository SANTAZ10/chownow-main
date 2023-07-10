"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/assets/chownow.png";
import { AiOutlineInstagram, AiOutlineTwitter, AiOutlineFacebook } from "react-icons/ai";

export default function Footer() {
  return (
    <div className=" flex flex-col gap-8 mb-10 items-center justify-center">
      <div>
        <span className="text-lg text-red-500  font-bold">ALL RIGHTS RESERVED</span>
      </div>
      <div className="flex gap-6">
        <AiOutlineFacebook size={40} className="text-red-500" />
        <AiOutlineInstagram size={40} className="text-red-500" />
        <AiOutlineTwitter size={40} className="text-red-500" />
      </div>
      <div>
        <Link href="/" className=" flex justify-center items-center gap-2">
          <Image src={logo} alt="" width={40} height={40} />
          <h1 className="font-bold text-red-500 text-xl ">ChowNow</h1>
        </Link>
      </div>
    </div>
  );
}
