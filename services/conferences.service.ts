import { gql } from "@apollo/client";

const FETCH_CONFERENCES = gql`
  query getConferences {
    conferences {
      id
      name
      startDate
      endDate
      schedules {
        day
        intervals {
          begin
          end
        }
      }
    }
  }
`;

export default FETCH_CONFERENCES;
