import Image from "next/image";
import housecleaningimg from "../assests/house-cleaning.png";
import deepcleaningimg from "../assests/deep-cleaning.png"
import postrenovationimg from "../assests/renovation.png"
import apartmentcleaning from "../assests/apartment-cleaning.png"
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


      <div className="flex flex-col md:flex-row md:items-center md:space-y-0  md:overflow-x-scroll scrollbar-hide md:space-x-20 md:justify-start md:px-8 lg:space-x-4   lg:px-2 items-center space-y-4 mt-8">


      <div className="  min-h-[350px] p-5 min-w-[300px] lg:min-w-[250px] border rounded-lg overflow-hidden border-orange  hover:text-white hover:bg-orange transition-all ease-linear duration-150 flex justify-center items-center">
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
            House cleaning services are available at recurring intervals. We&apos;ll
            make sure to keep your home clean on a weekly, bi-weekly or monthly
            basis.
          </p>
          <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg"> Contact Now</button>
        </div>
      </div>
      <div className="  min-h-[350px] p-5 min-w-[300px]  border rounded-lg overflow-hidden border-[#5d5d5d]  hover:text-white hover:bg-[#5d5d5d] transition-all ease-linear duration-150  flex justify-center items-center">
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
            House cleaning services are available at recurring intervals. We&apos;ll
            make sure to keep your home clean on a weekly, bi-weekly or monthly
            basis.
          </p>
          <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg"> Contact Now</button>
        </div>
      </div>
      <div className="  min-h-[350px] p-5 min-w-[300px]  border rounded-lg overflow-hidden border-green-700 hover:text-white hover:bg-green-700 transition-all ease-linear duration-150 flex justify-center items-center">
        <div className=" space-y-2 flex flex-col items-center justify-center">
          <Image
            src={postrenovationimg}
            width={512}
            height={512}
            alt="house cleaning"
            className="w-20"
          />
          <h1 className="font-bold text-2xl text-center"> Post-Renovation Cleaning</h1>
          <p className="text-sm text-center">
            House cleaning services are available at recurring intervals. We&apos;ll
            make sure to keep your home clean on a weekly, bi-weekly or monthly
            basis.
          </p>
          <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg"> Contact Now</button>
        </div>
      </div>
      <div className="  min-h-[350px] p-5 min-w-[300px]  border rounded-lg overflow-hidden border-blue-400 hover:text-white hover:bg-blue-400 transition-all ease-linear duration-150  flex justify-center items-center">
        <div className=" space-y-2 flex flex-col items-center justify-center">
          <Image
            src={apartmentcleaning}
            width={512}
            height={512}
            alt="house cleaning"
            className="w-20"
          />
          <h1 className="font-bold text-2xl text-center"> Apartment & Condo Cleaning</h1>
          <p className="text-sm text-center">
            House cleaning services are available at recurring intervals. We&apos;ll
            make sure to keep your home clean on a weekly, bi-weekly or monthly
            basis.
          </p>
          <button className="bg-red px-3 py-2 text-white font-semibold rounded-lg"> Contact Now</button>
        </div>
      </div>



      </div>

    </div>
  );
}
export default Services;
