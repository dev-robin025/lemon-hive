import Image from "next/image";
import { BsArrowUpRight } from "react-icons/bs";
import Typography from "../shared/Typography";

const HeroSection = () => {
  return (
    <section className="flex flex-wrap max-w-[1320px] mx-auto px-16 items-end py-20">
      <div className="relative w-2/3 pr-10 tablet:pr-0 tablet:w-full">
        <div className="text-right">
          <Typography.H1>
            <span className="relative before:absolute before:-top-8 before:-left-12 before:w-full before:bg-[url('/crown-vector.png')] before:h-full before:bg-no-repeat">
              R
            </span>
            <span>eact Conference</span>
          </Typography.H1>
        </div>

        <div className="flex gap-10 mt-5 tablet:hidden">
          <div className="relative w-1/3 after:absolute after:-bottom-1/4 after:-right-1/3 after:-z-10 after:h-full after:w-full after:bg-[url('/ornament.jpg')] after:bg-no-repeat after:bg-right-bottom">
            <Image src="/hero-02.png" alt="" height={420} width={330} />
          </div>
          <div className="w-2/3">
            <Typography.H3>
              Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum..id
              fermentum.In quis diam turpis quam id fermentum. fermentum.
            </Typography.H3>
            <button className="py-3 bg-primary rounded-3xl px-6 w-72 mt-5 flex items-center gap-2 justify-center">
              Buy Tickets <BsArrowUpRight />
            </button>
          </div>
        </div>

        <div className="absolute top-5 -right-[340px] -z-10">
          <div className="relative">
            <Image src="/hero-bg.png" alt="hero-image" height={560} width={550} />
          </div>
        </div>
      </div>

      <div className="w-1/3 tablet:w-full">
        <div className="relative after:absolute after:-bottom-16 after:-left-16 after:w-[130px] after:h-[130px] after:bg-[url('/Star.png')] after:bg-no-repeat after:bg-left-bottom ">
          <Image src="/hero-01.png" alt="hero-image" height={560} width={550} />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
