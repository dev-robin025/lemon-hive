import moment from "moment";

const getWeek = () => {
  let start: moment.Moment = moment().startOf("isoWeek");
  const end: moment.Moment = moment().endOf("isoWeek");

  let days: moment.Moment[] | undefined = [];

  while (start.isBefore(end)) {
    days.push(start.clone());
    start = start.add(1, "day");
  }
  return days;
};

export default getWeek;
