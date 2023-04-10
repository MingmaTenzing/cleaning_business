import Image from "next/image";
import comcleaning from "../assests/com-cleaning.jpg"

type Props = {};
function AboutUs({}: Props) {
  return (
    <div className="mt-10  bg-slate-50 p-4 pt-20 flex flex-col items-center space-y-4 lg:space-y-0 lg:flex-row lg:items-center lg:justify-center">
      
        <div className="flex flex-col items-center">
          <h1 className="text-semibold text-red text-sm text-center">
            About Us
          </h1>
          <p className=" text-2xl font-bold text-center">
            We Are Dedicated To Do Your Work
          </p>
          <p className="text-sm text-gray-700 mt-4 text-center  w-2/3">
            There are many variations of passages of Lorem Ipsum available, but
            the majority have suffered alteration in some form, by injected
            humour, or randomised words which don&apos;t look even slightly
            believable.
          </p>

          <button className="text-white bg-red rounded-lg px-2 py-1 text-sm mt-5">Learn More</button>
      
      </div>

      <div>
        <Image src={comcleaning} alt="cleaning" width={1920} height={1080} className=" md:w-[700px] lg:w-[1400px] md:object-cover md:h-[300px] md:object-center " />
      </div>
    </div>
  );
}
export default AboutUs;
