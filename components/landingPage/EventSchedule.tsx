import moment, { Moment } from "moment";
import { FC, useEffect, useState } from "react";
import { TbPlayerTrackNext, TbPlayerTrackPrev } from "react-icons/tb";
import getHours from "../../utils/getHours";
import getWeek from "../../utils/getWeek";
import Event from "./Event";

interface IConference {
  id: String;
  name: String;
  startDate: Date;
  schedules: [
    {
      day: Date;
      intervals: [{ begin: String; end: String }];
    }
  ];
}

interface IProps {
  conferences: [IConference];
}

const EventSchedule: FC<IProps> = ({ conferences }) => {
  const [dateRange, setDateRange] = useState({
    start: moment().startOf("week"),
    end: moment().endOf("week"),
  });
  const [week, setWeek] = useState<Moment[]>([]);
  const hours: moment.Moment[] = getHours();

  useEffect(() => {
    const days: moment.Moment[] = getWeek(dateRange);
    setWeek(days);
  }, [dateRange]);

  return (
    <div className="mt-10 overflow-auto">
      <div className="min-w-[1000px]">
        <div className="grid grid-cols-8 text-center border border-b-0 border-r-0 border-[lightgray]">
          <div className="border-r py-6 border-[lightgray] flex items-center justify-center gap-5 text-xl">
            <TbPlayerTrackPrev
              className="cursor-pointer"
              onClick={() =>
                setDateRange({
                  start: dateRange.start.subtract(1, "week"),
                  end: dateRange.end.subtract(1, "week"),
                })
              }
            />
            <TbPlayerTrackNext
              className="cursor-pointer"
              onClick={() =>
                setDateRange({
                  start: dateRange.start.add(1, "week"),
                  end: dateRange.end.add(1, "week"),
                })
              }
            />
          </div>
          {week.map((day, index) => (
            <div
              key={index}
              className="flex flex-col items-center justify-center border-r border-[lightgray] py-1"
            >
              <p className="text-xl font-bold text-dark">{day.format("DD/MM/YY")}</p>
              <span>{day.format("ddd")}</span>
            </div>
          ))}
        </div>

        <div className="border-b-0 border border-[lightgray]">
          {hours.map((hour, index) => (
            <div className="grid grid-cols-8 text-center border-b border-[lightgray]" key={index}>
              <span className="flex items-center justify-center text-xl font-bold text-dark">
                {hour.format("HH:mm")}
              </span>

              {week.map((day, index) => (
                <div
                  key={index}
                  className="h-32 border-l border-[lightgray] p-2 flex flex-col overflow-auto overflow-x-hidden gap-2 no-scrollbar"
                >
                  {conferences.map((con: IConference) =>
                    con.schedules.map((shd, key) => {
                      return (
                        <Event
                          id={con.id}
                          title={con.name}
                          scheduleDay={shd.day}
                          timeSlot={shd.intervals}
                          calHour={hour}
                          calDay={day}
                          key={key}
                        />
                      );
                    })
                  )}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventSchedule;
