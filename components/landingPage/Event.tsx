import { Moment } from "moment";
import Link from "next/link";

interface IConference {
  id: String;
  title: String;
  scheduleDay: String;
  timeSlot: [{ begin: String; end: String }];
  calHour: Moment;
  calDay: Moment;
}

const Event = ({ id, title, scheduleDay, timeSlot, calHour, calDay }: IConference) => {
  const calenderHr: String = calHour.format("HH:mm");
  const calenderDay: String = calDay.format("ddd");

  return (
    <>
      {timeSlot.map(({ begin, end }, key) =>
        begin === calenderHr && scheduleDay === calenderDay ? (
          <Link href={{ pathname: `/${id}` }} key={key}>
            <div className="border rounded p-2 border-[#FCB12A] bg-[#fffcf7] text-start cursor-pointer">
              <p className="text-base font-bold leading-5">{id}</p>
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
