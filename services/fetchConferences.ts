import { gql } from "@apollo/client";
import client from "../lib/client";

export const getConferences = async () => {
  try {
    const { data } = await client.query({
      query: gql`
        query conferences {
          name
          schedules {
            day
          }
        }
      `,
    });
    console.log(data);
  } catch (error) {
    console.log("conferences fetching error", error);
  }
};
