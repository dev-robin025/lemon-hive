import Image from "next/image";
import { FC } from "react";
import { ISponsor } from "../../interfaces/conference";
import Typography from "../shared/Typography";

interface ISponsors {
  sponsors: [ISponsor];
}

const Sponsors: FC<ISponsors> = ({ sponsors }) => (
  <div className="space-y-5">
    {sponsors.length ? (
      sponsors.map(({ name, aboutShort, image, location }, key) => (
        <div
          key={key}
          className="bg-white rounded-lg p-5 flex gap-5  mobile:flex-wrap mobile:p-3 mobile:gap-3"
        >
          <div className="mobile:w-full">
            <div className="relative h-36 w-36 mobile:h-28 mobile:w-28 rounded-lg overflow-hidden shadow-md">
              <Image src={image.url} alt={name} layout="fill" sizes="" />
            </div>
          </div>
          <div className="flex-1 space-y-2">
            <div className="flex items-center justify-between">
              <Typography.H3 bold>{name}</Typography.H3>
              <p className="text-[#0A142F] opacity-50">
                {location.city + ", " + location.country.name}
              </p>
            </div>
            <p className="text-[#0A142F] opacity-80">{aboutShort}</p>
          </div>
        </div>
      ))
    ) : (
      <Typography.H3>There is no sponsors! </Typography.H3>
    )}
  </div>
);

export default Sponsors;
