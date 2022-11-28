import Image from "next/image";
import { ISpeaker } from "../../interfaces/conference";
import Typography from "../shared/Typography";

interface ISpeakers {
  speakers: [ISpeaker];
}

const Speakers = ({ speakers }: ISpeakers) => (
  <div className="space-y-5">
    {speakers.map(({ image, name, aboutShort }, key) => (
      <div key={key} className="bg-white rounded-lg p-5 flex gap-5">
        <div className="relative h-36 w-36 rounded-lg overflow-hidden">
          <Image src={image.url} alt={name} layout="fill" sizes="" />
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between">
            <Typography.H3 bold>{name}</Typography.H3>
            <p className="text-[#0A142F] opacity-50">Company Name</p>
          </div>
          <p className="text-[#0A142F] opacity-80">{aboutShort}</p>
        </div>
      </div>
    ))}
  </div>
);

export default Speakers;
