export interface AssignmentOperatorsTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  symbol: string;
  title: string;
  description: string;
}
