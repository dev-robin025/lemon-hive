import Image from "next/image";
import { ISchedule } from "../../interfaces/conference";
import Typography from "../shared/Typography";

interface ISchedules {
  schedules: [ISchedule];
}

const Schedule = ({ schedules }: ISchedules) => {
  return (
    <div className="space-y-5">
      {schedules.map(({ day, location: { about, address, city, country, image, name } }, key) => (
        <div key={key} className="bg-white rounded-lg p-5 flex gap-5">
          <div className="relative h-36 w-36 rounded-lg overflow-hidden">
            <Image src={image.url} alt={address} layout="fill" sizes="" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <Typography.H3 bold>{name}</Typography.H3>
              <p className="text-[#0A142F] opacity-50">{day}</p>
            </div>
            <p className="text-[#0A142F] opacity-50">
              {address + ", " + city + ", " + country.name}
            </p>

            <p className="text-[#0A142F] opacity-80">{about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
