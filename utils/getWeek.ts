import { Moment } from "moment";

interface IRange {
  start: Moment;
  end: Moment;
}

const getWeek = (range: IRange) => {
  let firstDay: Moment = range.start.clone();
  const lastDay: Moment = range.end.clone();

  let days: Moment[] = [];

  while (firstDay.isBefore(lastDay)) {
    days.push(firstDay.clone());
    firstDay = firstDay.add(1, "day");
  }

  return days;
};

export default getWeek;
