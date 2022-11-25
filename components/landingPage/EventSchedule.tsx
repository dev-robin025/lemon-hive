import moment from "moment";
import { useEffect, useState } from "react";

interface IProps {
  conferences: [];
}

const EventSchedule = ({ conferences }: IProps) => {
  const [hours, setHours] = useState<moment.Moment[] | undefined>([]);

  const startDay = moment().startOf("day").add(9, "hours");
  const endDay = startDay.clone().add(11, "hours");
  const hour = startDay.clone();

  useEffect(() => {
    getWeek();
    let res: moment.Moment[] | undefined;
    while (!hour.isSame(endDay, "hour")) {
      res = new Array(11).fill(null).map(() => hour.add(1, "hour").clone());
    }

    setHours(res);
  }, []);

  return (
    <div>
      {/* <div className="grid grid-cols-8 text-center">
        <span></span>
        {calendar.map((day, index) => (
          <span key={index}>{day.format("ddd")}</span>
        ))}
      </div>

      {hourOfDay.map((hour, index) => (
        <div className="grid grid-cols-8 text-center" key={index}>
          <span className="border flex justify-center items-center">
            {hour.format("LT")}
          </span>
          {calendar.map((day, index) => (
            <span key={index} className="border h-12">
              {event.map(
                (e) =>
                  e.date === day.format("DD/MM/YYYY") &&
                  e.time.split(":")[0] === hour.format("hh") &&
                  e.name
              )}
            </span>
          ))}
        </div>
      ))} */}
    </div>
  );
};

const getWeek = () => {
  let start: moment.Moment = moment().startOf("isoWeek");
  const end: moment.Moment = moment().endOf("isoWeek");

  console.log("calling...", start.isSame(end));

  let days: moment.Moment[] | undefined;

  while (!start.isSame(end)) {
    days?.push(start);
    start.add(1, "day");
  }

  alert(JSON.stringify(days));

  console.log({ days });

  // for (let i = 0; i < 7; i++) {
  //   console.log(start.add(i, "day").clone(), i);
  // }
};

export default EventSchedule;
