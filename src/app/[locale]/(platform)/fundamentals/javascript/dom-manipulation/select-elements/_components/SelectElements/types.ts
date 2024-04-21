export interface SelectElementsTypes {
  data: Data;
}

interface Data {
  title: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
}
