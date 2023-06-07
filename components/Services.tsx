import Image from "next/image";
import housecleaningimg from "../assests/house-cleaning.png";
import deepcleaningimg from "../assests/deep-cleaning.png";
import postrenovationimg from "../assests/renovation.png";
import apartmentcleaning from "../assests/apartment-cleaning.png";
import Link from "next/link";
type Props = {};
function Services({}: Props) {
  return (
    <div className="mt-[200px] lg:mt-[150px] p-4">
      <div className="space-y-3">
        <h1 className="text-center text-red font-semibold "> Our Services</h1>
        <p className=" font-bold text-2xl text-center">
          {" "}
          We are Committed To Give Our Best Services
        </p>
      </div>

      <div className="flex flex-col md:flex-row md:items-center md:space-y-0 md:justify-center  md:overflow-x-scroll scrollbar-hide md:space-x-20 md:justify-start md:px-8 lg:space-x-4   lg:px-2 items-center space-y-4 mt-8">
        <div className="  min-h-[350px] p-5 min-w-[300px]  lg:w-[300px] border rounded-lg overflow-hidden border-orange  hover:text-white hover:bg-orange transition-all ease-linear duration-150 flex justify-center items-center">
          <div className=" space-y-2 flex flex-col items-center justify-center">
            <Image
              src={housecleaningimg}
              width={512}
              height={512}
              alt="house cleaning"
              className="w-20"
            />
            <h1 className="font-bold text-2xl">House Cleaning</h1>
            <p className="text-sm text-center">
              Impeccable, eco-friendly service for a spotless home. Sit back and
              relax while we take care of the cleaning.
            </p>
            <Link href="/contact">
              <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg">
                {" "}
                Contact Now
              </button>
            </Link>
          </div>
        </div>
        <div className="  min-h-[350px] p-5 min-w-[300px] lg:w-[300px]   border rounded-lg overflow-hidden border-[#5d5d5d]  hover:text-white hover:bg-[#5d5d5d] transition-all ease-linear duration-150  flex justify-center items-center">
          <div className=" space-y-2 flex flex-col items-center justify-center">
            <Image
              src={deepcleaningimg}
              width={512}
              height={512}
              alt="house cleaning"
              className="w-20"
            />
            <h1 className="font-bold text-2xl"> Deep Cleaning</h1>
            <p className="text-sm text-center">
              Meticulous and eco-friendly service for a pristine home
              transformation. Sit back, relax, and let us rejuvenate your living
              spaces to perfection.
            </p>
            <Link href="/contact">
              <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg">
                {" "}
                Contact Now
              </button>
            </Link>
          </div>
        </div>
        <div className="  min-h-[350px] p-5 min-w-[300px] lg:w-[300px]   border rounded-lg overflow-hidden border-green-700 hover:text-white hover:bg-green-700 transition-all ease-linear duration-150 flex justify-center items-center">
          <div className=" space-y-2 flex flex-col items-center justify-center">
            <Image
              src={postrenovationimg}
              width={512}
              height={512}
              alt="house cleaning"
              className="w-20"
            />
            <h1 className="font-bold text-2xl text-center">
              {" "}
              Post-Renovation Cleaning
            </h1>
            <p className="text-sm text-center">
              Leave the mess to us. Our expert team will meticulously clean and
              restore your space after renovations, ensuring a spotless and
              dust-free environment.
            </p>
            <Link href="/contact">
              <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg">
                {" "}
                Contact Now
              </button>
            </Link>
          </div>
        </div>
        <div className="  min-h-[350px] p-5 min-w-[300px] lg:w-[300px]   border rounded-lg overflow-hidden border-blue-400 hover:text-white hover:bg-blue-400 transition-all ease-linear duration-150  flex justify-center items-center">
          <div className=" space-y-2 flex flex-col items-center justify-center">
            <Image
              src={apartmentcleaning}
              width={512}
              height={512}
              alt="house cleaning"
              className="w-20"
            />
            <h1 className="font-bold text-2xl text-center">
              {" "}
              Apartment & Condo Cleaning
            </h1>
            <p className="text-sm text-center">
            Trust our dedicated team to provide thorough and reliable cleaning services for your apartment or condo. Enjoy a pristine living space without lifting a finger.
            </p>
            <Link href="/contact">
              <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg">
                {" "}
                Contact Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
