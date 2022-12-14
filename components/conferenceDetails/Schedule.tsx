import Image from "next/image";
import { FC } from "react";
import { ISchedule } from "../../interfaces/conference";
import Typography from "../shared/Typography";

interface ISchedules {
  schedules: [ISchedule];
}

const Schedule: FC<ISchedules> = ({ schedules }) => {
  return (
    <div className="space-y-5">
      {schedules.map(({ day, location: { about, address, city, country, image, name } }, key) => (
        <div
          key={key}
          className="bg-white rounded-lg p-5 flex gap-5 mobile:flex-wrap mobile:p-3 mobile:gap-3"
        >
          <div className="mobile:w-full">
            <div className="relative h-36 w-36 mobile:h-28 mobile:w-28 rounded-lg overflow-hidden">
              <Image src={image.url} alt={address} layout="fill" sizes="" />
            </div>
          </div>

          <div className="flex-1 space-y-3">
            <div>
              <div className="flex items-center justify-between">
                <Typography.H3 bold>{name}</Typography.H3>
                <p className="text-[#0A142F] opacity-50">{day}</p>
              </div>
              <p className="text-[#0A142F] opacity-50">
                {address + ", " + city + ", " + country.name}
              </p>
            </div>

            <p className="text-[#0A142F] opacity-80">{about}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Schedule;
