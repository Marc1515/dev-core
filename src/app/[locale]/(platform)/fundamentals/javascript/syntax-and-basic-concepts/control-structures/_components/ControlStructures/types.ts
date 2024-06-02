export interface ControlStructuresTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
  structures: Structures;
  conclusion: string;
}

interface Structures {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  id: number;
  title: string;
  description: string;
  items?: Mainfunction[];
}

interface Importance {
  title: string;
  description: string;
  items: Mainfunction[];
}

interface Mainfunction {
  title: string;
  description: string;
}
