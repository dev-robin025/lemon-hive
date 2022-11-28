import Image from "next/image";
import { FC } from "react";
import { BsArrowUpRight } from "react-icons/bs";
import Typography from "../shared/Typography";

const HeroSection: FC = () => {
  return (
    <section className="flex flex-wrap max-w-[1320px] mx-auto px-16 tablet:px-20 items-end py-20 tablet:py-14 tablet:gap-10 mobile:px-10 relative">
      <div className=" w-2/3 pr-10 tablet:pr-0 tablet:w-full">
        <div className="text-right relative">
          <Typography.H1>
            <span className="relative before:absolute before:-top-8 before:-z-10 before:-left-12 tablet:before:-top-10 tablet:before:-left-14 before:w-full before:bg-[url('/crown-vector.png')] before:h-full before:bg-no-repeat mobile:before:-left-7 mobile:before:-top-6 mobile:before:bg-contain">
              R
            </span>
            <span>eact </span>
            <span>Conference</span>
          </Typography.H1>
        </div>

        <div className="flex gap-10 tablet:gap-7 mt-5">
          <div className="relative w-1/3 after:absolute after:-bottom-1/4 after:-right-1/3 after:-z-10 after:h-full after:w-full after:bg-[url('/ornament.jpg')] after:bg-no-repeat after:bg-right-bottom tablet:hidden">
            <Image src="/hero-02.png" alt="" height={420} width={330} />
          </div>
          <div className="w-2/3 tablet:w-full">
            <Typography.H3>
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id
              fermentum.In quis diam turpis quam id fermentum. fermentum.
            </Typography.H3>
            <button className="py-3 bg-primary rounded-3xl px-6 w-72 mt-5 flex items-center gap-2 justify-center tablet:mx-auto">
              Buy Tickets <BsArrowUpRight />
            </button>
          </div>
        </div>
      </div>

      <div className="w-1/3 tablet:w-full">
        <div className="relative after:absolute after:-bottom-16 after:-left-16 mobile:after:left-64 mobile:after:-bottom-12 mobile:after:w-[90px] mobile:after:h-[90px] mobile:after:bg-contain after:w-[130px] after:h-[130px] after:bg-[url('/Star.png')] after:bg-no-repeat after:bg-left-bottom h-[400px] tablet:w-[80%] tablet:mx-auto mobile:w-full mobile:h-[370px]">
          <Image src="/hero-01.png" alt="hero-image" fill />
        </div>
      </div>
      <Image
        src="/scroll-down.png"
        alt=""
        height={102}
        width={22}
        className="absolute bottom-0 left-1/2"
      />
    </section>
  );
};

export default HeroSection;
