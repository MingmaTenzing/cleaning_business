import Image from "next/image";
import rev1 from "../assests/rev1.jpg";
import rev2 from "../assests/rev2.jpg";
import rev3 from "../assests/rev3.jpg";
import rev4 from "../assests/rev4.jpg";
import { StarIcon } from "@heroicons/react/24/solid";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type Props = {};
function Reviews({}: Props) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoPlay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-10">
      <div className="space-y-2">
        <h2 className="text-center font-semibold text-red">Client Review</h2>
        <h1 className="text-center text-2xl  font-bold">
          What Clients Say About Us
        </h1>
      </div>
      <div className="max-w-[80%] m-auto">
        <Slider {...settings}>
          <div className="h-[300px] w-[300px] md:max-w-[350px]   bg-slate-50 rounded-lg p-5">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Image
                src={rev1}
                alt="review user"
                width={400}
                height={400}
                className="w-20 h-20 object-cover rounded-full  border-orange border-2"
              />
              <h1 className="text-gray-800 font-bold text-xl">David R.</h1>
              <div className="flex">
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
              </div>
              <p className=" text-gray-500 text-sm text-center">
                LuxoClean is outstanding! Professional, thorough, and friendly.
                My apartment has never looked better. Highly recommended!
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[300px] md:max-w-[350px] bg-slate-50 rounded-lg p-5">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Image
                src={rev2}
                alt="review user"
                width={400}
                height={400}
                className="w-20 h-20 object-cover rounded-full border border-orange border-2"
              />
              <h1 className="text-gray-800 font-bold text-xl"> Sarah M.</h1>
              <div className="flex">
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
              </div>
              <p className=" text-gray-500 text-sm text-center">
                Impressed with LuxoClean's attention to detail. They left my
                apartment spotless. Reliable and efficient service. A cleaning
                company I can trust.
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[300px] md:max-w-[350px] bg-slate-50 rounded-lg p-5">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Image
                src={rev3}
                alt="review user"
                width={400}
                height={400}
                className="w-20 h-20 object-cover rounded-full border border-orange border-2"
              />
              <h1 className="text-gray-800 font-bold text-xl">Alex W.</h1>
              <div className="flex">
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
              </div>
              <p className=" text-gray-500 text-sm text-center">
                LuxoClean's cleaners are top-notch. They were punctual,
                respectful, and attentive to my specific requests. I am thrilled
                with the results!
              </p>
            </div>
          </div>
          <div className="h-[300px] w-[300px] md:max-w-[350px] bg-slate-50 rounded-lg p-5">
            <div className="flex flex-col items-center justify-center space-y-3">
              <Image
                src={rev4}
                alt="review user"
                width={400}
                height={400}
                className="w-20 h-20 object-cover rounded-full border border-orange border-2"
              />
              <h1 className="text-gray-800 font-bold text-xl">Emily S.</h1>
              <div className="flex">
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
                <StarIcon className="w-4 text-orange" />
              </div>
              <p className=" text-gray-500 text-sm text-center">
                Convenient and reliable! LuxoClean accommodated my schedule and
                delivered excellent service. I couldn't be happier with their
                work.
              </p>
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Reviews;
