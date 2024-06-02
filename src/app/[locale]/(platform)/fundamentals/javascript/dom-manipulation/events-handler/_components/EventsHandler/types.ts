export interface EventsHandlerTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  events: Event[];
  conclusion: string;
}

interface Event {
  title: string;
  description: string;
}
