import { useEffect } from "react";
import { getConferences } from "../../services/fetchConferences";
import Typography from "../shared/Typography";

const EventSchedule = () => {
  useEffect(() => {
    getConferences();
  }, []);

  return (
    <section className="max-w-[1320px] mx-auto px-40 py-20">
      <Typography.H2>Event Schedule</Typography.H2>
      <Typography.H3>
        Lorem uis diam turpis quam id fermentum.In quis diam turpis quam id fermentum.
      </Typography.H3>
    </section>
  );
};

export default EventSchedule;
