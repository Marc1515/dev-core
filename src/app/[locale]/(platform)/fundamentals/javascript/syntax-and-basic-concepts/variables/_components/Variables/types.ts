export interface VariablesTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
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
