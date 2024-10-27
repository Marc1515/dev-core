export interface OperatorsTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  main_function: Mainfunction;
  importance: Importance;
  additional_concepts: Importance;
  operators: Operator[];
  conclusion: string;
}

interface Operator {
  title: string;
  description: string;
  items: Item2[];
}

interface Item2 {
  symbol: string;
  title?: string;
  description?: string;
  equal_to_operator_explanation?: string;
}

interface Importance {
  title: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
}

interface Mainfunction {
  title: string;
  description: string;
}
