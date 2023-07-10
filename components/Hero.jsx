import Link from "next/link";
import Image from "next/image";
import { GiFullPizza } from "react-icons/gi";
import { BiPhone } from "react-icons/bi";
import bigPizza from "@/assets/pizza.png";
import pizza from "@/assets/p1.jpg";
export default function Hero() {
  return (
    <div className="mx-10 m-[4rem] backdrop:flex flex-col sm:flex sm:flex-row ">
      {/* left side */}
      <div className=" flex flex-col sm:w-[60%] gap-[3rem] justify-center mb-12 sm:justify-start sm:items-start">
        <div className=" flex justify-center gap-1 text-gray-800 font-bold text-sm sm:text-[.6rem] items-center w-fit p-3 bg-pink-200 rounded-full">
          <span>Quick Delivery</span>
          <GiFullPizza size={20} className="text-red-500" />
        </div>
        <div className="  flex flex-col gap-[2rem] text-gray-800 text-3xl sm:text-6xl font-bold">
          <span>Swiftly Delivering</span>
          <span>
            Piping-<span className="text-red-600">hot</span>
          </span>
          <span>Pizzas To You</span>
        </div>
        <div className="flex flex-col gap-8 items-center justify-center sm:items-start sm:w-[60%]">
          <span className="text-justify text-sm sm:text-xs font-bold text-gray-500">
            Delighting pizza lovers with exceptional flavors, quality ingredients, and outstanding
            service, we aim to create memorable moments one slice at a time.
          </span>
          <Link
            href="/"
            className="px-6 py-3 rounded-full bg-red-500 w-fit items-center justify-center sm:text-sm text-white cursor-pointer font-light"
          >
            Get Started
          </Link>
        </div>
      </div>
      {/* right side */}
      <div>
        <div className=" relative sm:hidden ">
          <div>
            <Image src={bigPizza} alt="" width={200} height={200} className="animate-spin-slow" />
          </div>
          <div className=" absolute -bottom-5 right-6 p-2 flex gap-3 w-fit justify-center rounded-sm bg-white items-center">
            <div className="m-0">
              <Image src={pizza} alt="" width={60} height={60} className="rounded-md" />
            </div>
            <div className="flex flex-col justify-between text-sm">
              <span>Italian Pizza</span>
              <span>
                <span className=" text-red-500">$</span> 17.49
              </span>
            </div>
          </div>
        </div>

        {/* large screen  */}
        <div className="hidden sm:block sm:relative items-center justify-center ">
          <div>
            <div className="justify-center ">
              <Image src={bigPizza} alt="" width={300} height={300} className="animate-spin-slow" />
            </div>
            <div className=" absolute -bottom-4 -right-10 p-2 flex-nowrap flex gap-3 w-fit justify-center rounded-sm sm:rounded-md bg-white items-center hover:scale-110 ease-in duration-200 cursor-pointer">
              <div className="m-0">
                <Image src={pizza} alt="" width={60} height={60} className="rounded-md" />
              </div>
              <div className="flex flex-col  justify-between text-sm">
                <span className="">Italian Pizza</span>
                <span>
                  <span className=" text-red-500">$</span> 17.49
                </span>
              </div>
            </div>
          </div>
          <div className=" flex items-center p-4 rounded-full bg-white justify-center gap-4 cursor-pointer hover:scale-110 ease-in duration-200 shadow-lg absolute -bottom-[7rem] right-[6rem]">
            <span className="text-red-500">Contact Us</span>
            <Link className="text-white p-2 rounded-full text-sm bg-green-500" href="/">
              <BiPhone />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
