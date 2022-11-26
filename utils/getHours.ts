import moment from "moment";

const getHours = () => {
  let start: moment.Moment = moment().startOf("day").add(9, "hours");
  const end: moment.Moment = start.clone().add(9, "hours");

  let hours: moment.Moment[] | undefined = [];

  while (start.isBefore(end)) {
    hours.push(start.clone());
    start = start.add(1, "hour");
  }

  return hours;
};

export default getHours;
