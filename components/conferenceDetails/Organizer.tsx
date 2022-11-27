import Image from "next/image";
import Typography from "../shared/Typography";

interface IOrganizer {
  organizer: {
    name: string;
    about: string;
    image: {
      url: string;
    };
  };
}

const Organizer = ({ organizer: { name, about, image } }: IOrganizer) => (
  <div className="bg-white rounded-lg p-5 flex gap-5">
    <div className="relative h-36 w-36 rounded-lg overflow-hidden">
      <Image src={image.url} alt={name} layout="fill" />
    </div>
    <div className="flex-1">
      <Typography.H3 bold>{name}</Typography.H3>
      <p className="text-[#0A142F] opacity-80">{about}</p>
    </div>
  </div>
);

export default Organizer;
