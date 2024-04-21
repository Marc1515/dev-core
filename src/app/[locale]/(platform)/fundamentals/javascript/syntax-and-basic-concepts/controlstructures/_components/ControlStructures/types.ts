export interface ControlStructuresTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
  structures: Structure[];
}

interface Structure {
  title: string;
  description: string;
  items?: Mainfunction[];
}

interface Importance {
  title: string;
  items: Item[];
}

interface Item {
  description: string;
}

interface Mainfunction {
  title: string;
  description: string;
}
