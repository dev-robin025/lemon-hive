import moment from "moment";
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

const EventSchedule = ({ conferences }: IProps) => {
  const week: moment.Moment[] = getWeek();
  const hours: moment.Moment[] = getHours();

  return (
    <div className="mt-10">
      <div className="grid grid-cols-8 text-center border border-b-0 border-[lightgray]">
        <span className="border-r py-6 border-[lightgray]"></span>
        {week.map((day, index) => (
          <span
            key={index}
            className="flex items-center justify-center text-xl font-bold text-dark"
          >
            {day.format("ddd")}
          </span>
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
                    const conDay: String = moment(shd.day).format("ddd");
                    return (
                      <Event
                        id={con.id}
                        title={con.name}
                        scheduleDay={conDay}
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
  );
};

export default EventSchedule;
