## React Conference [Click here to see live](https://lemon-hive-jade.vercel.app/)

This is a [Next.js](https://nextjs.org/) project bootstrapped with `TypeScript`.
Used technologies and tools are mentioned below:

- `Tailwind` for styling.
- `Apollo Client` `graphql` for fetch data from GraphQL Endpoint.
- `react-dnd` for drag and drop component.
- `momentJs` for create large event calendar.
- `react-icons` for usable icons.

### Overview

Schedule section on landing page, schedule data (conference) is totally dynamic as per the instruction. A conference is coordinately visible when calendar is satisfied with the conditions. Conditions are:

- conference schedule date should be matched with calendar date.
- And conference begin time should be matched with calendar time cell.

User can see more information about a conference in another page. For this, user should have click on a conference. In the conference details page, User get to know about speakers,organizer, locations, sponsors, schedule in separate tab append in sidebar. Navigator tab items are draggable! So that user can change tab items order. Ideally whole implementation is responsive for large, tablet and small screen.
