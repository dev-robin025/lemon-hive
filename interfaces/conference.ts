export interface IOrganizer {
  name: string;
  about: string;
  image: {
    url: string;
  };
}

export interface ISpeaker {
  name: string;
  aboutShort: string;
  image: {
    url: string;
  };
}

export interface ILocation {
  address: string;
  city: string;
  about: string;
  name: string;
  image: {
    url: string;
  };
  country: {
    name: string;
  };
}

export interface ISchedule {
  day: string;
  location: ILocation;
}

export interface ISponsor {
  name: string;
  aboutShort: string;
  location: {
    city: string;
    country: {
      name: string;
    };
  };
  image: {
    url: string;
  };
}

interface IConference {
  name: string;
  slogan: string;
  organizer: IOrganizer;
  schedules: [ISchedule];
  speakers: [ISpeaker];
  sponsors: [ISponsor];
  locations: [ILocation];
}

export default IConference;
