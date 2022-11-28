import moment from "moment";
import Link from "next/link";
import { FC } from "react";
import IEvent from "../../interfaces/EVENT";

const Event: FC<IEvent> = ({ id, title, scheduleDay, timeSlot, calHour, calDay }) => {
  const calenderHr: String = calHour.format("HH:mm");
  const calenderDay: String = calDay.format("YYYY-MM-DD");

  return (
    <>
      {timeSlot.map(({ begin, end }, key) =>
        begin === calenderHr && calenderDay === String(scheduleDay) ? (
          <Link href={{ pathname: `/${id}` }} key={key}>
            <div
              className={`border rounded p-2 text-start cursor-pointer ${
                moment(scheduleDay).isAfter(moment())
                  ? "border-[#b2bae2] bg-[#f9fafd]"
                  : "border-[#FCB12A] bg-[#fffcf7]"
              }`}
            >
              <p className="text-base font-bold leading-5">{title}</p>
              <time className="text-xs">
                {begin}-{end}
              </time>
            </div>
          </Link>
        ) : null
      )}
    </>
  );
};

export default Event;
