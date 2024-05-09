export interface ControlStructuresTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
  structures: Structures;
}

interface Structures {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
  items?: Mainfunction[];
}

interface Importance {
  title: string;
  items: Mainfunction[];
}

interface Mainfunction {
  title: string;
  description: string;
}
