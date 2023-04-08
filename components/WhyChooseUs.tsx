import { CheckBadgeIcon, WrenchScrewdriverIcon } from "@heroicons/react/24/outline";
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";

type Props = {};
function WhyChooseUs({}: Props) {
  return (<>
  <div className="space-y-2">

  <h1 className="text-center text-red font-semibold mt-10  ">Why Choose Us</h1>
  <h1 className="text-center  font-bold text-2xl">We Value Our Customers</h1>
    
  </div>
    <div className="mt-4 flex flex-col items-center space-y-4 md:flex-row md:flex-wrap md:space-y-0 md:justify-center  ">
        
      <div className=" hover:shadow-lg  rounded-lg  md:m-3 h-[200px] w-[350px] space-y-4 border flex flex-col items-center justify-center p-2">
        <CheckBadgeIcon className="w-10  text-green-600" />
        <h1 className=" text-gray-800 font-bold text-lg text-center"> We Provide Qualified & Expert</h1>
        <p className="text-center text-gray-500">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="hover:shadow-lg  rounded-lg md:m-3 h-[200px] w-[350px] space-y-4 border flex flex-col items-center justify-center p-2">
        <WrenchScrewdriverIcon className="w-10  text-purple-600" />
        <h1 className=" text-gray-800 font-bold text-lg text-center"> Modern Tools & Technology Use</h1>
        <p className="text-center text-gray-500">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
      <div className="hover:shadow-lg  rounded-lg md:m-3 h-[200px] w-[350px] space-y-4 border flex flex-col items-center justify-center p-2">
        <PaperAirplaneIcon className="w-10 text-orange" />
        <h1 className=" text-gray-800 font-bold text-lg text-center"> Quick Responses & 24/7 Support</h1>
        <p className="text-center text-gray-500">
          {" "}
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry.
        </p>
      </div>
    </div>
    </>
  );
}
export default WhyChooseUs;
