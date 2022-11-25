import { gql } from "@apollo/client";
import client from "../lib/client";

export const getConferences = async () => {
  try {
    const { data: conferences } = await client.query({
      query: gql`
        query getConferences {
          conferences {
            id
            name
            schedules {
              day
            }
          }
        }
      `,
    });

    return conferences;
  } catch (error) {
    console.log("conferences fetching error", error);
  }
};
