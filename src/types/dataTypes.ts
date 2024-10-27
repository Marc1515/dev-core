export interface DataTypesTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  types: Type[];
  conclusion: string;
}

interface Type {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
}
