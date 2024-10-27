export interface VariablesTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
  conclusion: string;
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
