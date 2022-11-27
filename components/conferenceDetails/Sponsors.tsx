import Image from "next/image";
import Typography from "../shared/Typography";

interface ISponsor {
  name: string;
  aboutShort: string;
  location: {
    city: string;
    country: {
      name: string;
    };
  };
  image: {
    url: string;
  };
}

interface ISponsors {
  sponsors: [ISponsor];
}

const Sponsors = ({ sponsors }: ISponsors) => (
  <div className="space-y-5">
    {sponsors.map(({ name, aboutShort, image, location }, key) => (
      <div key={key} className="bg-white rounded-lg p-5 flex gap-5">
        <div className="relative h-36 w-36 rounded-lg overflow-hidden shadow-md">
          <Image src={image.url} alt={name} layout="fill" />
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
    ))}
  </div>
);

export default Sponsors;
