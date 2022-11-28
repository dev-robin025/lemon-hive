import { Moment } from "moment";

interface IEvent {
  id: String;
  title: String;
  scheduleDay: Date;
  timeSlot: [{ begin: String; end: String }];
  calHour: Moment;
  calDay: Moment;
}

export default IEvent;
