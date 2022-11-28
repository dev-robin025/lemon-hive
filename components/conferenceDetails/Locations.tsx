import Image from "next/image";
import { FC } from "react";
import { ILocation } from "../../interfaces/conference";
import Typography from "../shared/Typography";
interface ILocations {
  locations: [ILocation];
}

const Locations: FC<ILocations> = ({ locations }) => (
  <div className="space-y-5">
    {locations.length ? (
      locations.map(({ about, address, city, name, country, image }, key) => (
        <div
          key={key}
          className="bg-white rounded-lg p-5 flex gap-5 mobile:flex-wrap mobile:p-3 mobile:gap-3"
        >
          <div className="mobile:w-full">
            <div className="relative h-36 w-36 mobile:h-28 mobile:w-28 rounded-lg overflow-hidden">
              <Image src={image.url} alt={address} layout="fill" sizes="" />
            </div>
          </div>
          <div className="flex-1 space-y-2 mobile:space-y-4">
            <div className="flex justify-between">
              <div>
                <Typography.H3 bold>{name}</Typography.H3>
                <Typography.H4 bold>{address + ", " + city}</Typography.H4>
              </div>
              <p className="text-[#0A142F] opacity-50">{country.name}</p>
            </div>
            <p className="text-[#0A142F] opacity-80">{about}</p>
          </div>
        </div>
      ))
    ) : (
      <Typography.H3>There is no location fixed! </Typography.H3>
    )}
  </div>
);

export default Locations;
