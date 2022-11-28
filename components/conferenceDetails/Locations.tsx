import Image from "next/image";
import { ILocation } from "../../interfaces/conference";
import Typography from "../shared/Typography";
interface ILocations {
  locations: [ILocation];
}

const Locations = ({ locations }: ILocations) => (
  <div className="space-y-5">
    {locations.map(({ about, address, city, country, image }, key) => (
      <div key={key} className="bg-white rounded-lg p-5 flex gap-5">
        <div className="relative h-36 w-36 rounded-lg overflow-hidden">
          <Image src={image.url} alt={address} layout="fill" sizes="" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <Typography.H3 bold>{address + ", " + city}</Typography.H3>
            <p className="text-[#0A142F] opacity-50">{country.name}</p>
          </div>
          <p className="text-[#0A142F] opacity-80">{about}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Locations;
