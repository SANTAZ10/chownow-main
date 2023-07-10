import Image from "next/image";
import s1 from "@/assets/s1.png";
import s2 from "@/assets/s2.png";
import s3 from "@/assets/s3.png";
export default function Services() {
  return (
    <section className="flex flex-col gap-8 items-center justify-center mt-[4rem]">
      <div className=" flex flex-col gap-4 items-center justify-center">
        <span className=" text-red-500 font-bold text-xl">WHAT WE SERVE</span>
        <span className="font-bold text-gray-800 text-2xl">Your Favourite Food</span>
        <span className="font-bold text-gray-800 text-2xl">Delivery Partner</span>
      </div>

      <div className="flex flex-col gap-[4rem] sm:flex-row sm:gap-8 md:gap-16 items-center justify-center">
        <div className=" flex flex-col items-center justify-center">
          <Image src={s1} alt="" width={300} height={300} style={{ objectFit: "cover", layout: "intrinsic" }} className="w-[90%]" />
          <span className="font-bold text-gray-800">Easy to Order</span>
          <span className=" font-light text-gray-600">Only a few steps needed</span>
        </div>

        <div className=" flex flex-col items-center justify-center">
          <Image src={s2} alt="" width={300} height={300} style={{ objectFit: "cover", layout: "intrinsic" }} className="w-[90%]" />
          <span className="font-bold text-gray-800">Easy to Order</span>
          <span className=" font-light text-gray-600">Only a few steps needed</span>
        </div>

        <div className=" flex flex-col items-center justify-center">
          <Image src={s3} alt="" width={300} height={300} style={{ objectFit: "cover", layout: "intrinsic" }} className="w-[90%]" />
          <span className="font-bold text-gray-800">Easy to Order</span>
          <span className=" font-light text-gray-600">Only a few steps needed</span>
        </div>

        
      </div>
    </section>
  );
}
