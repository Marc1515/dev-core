export interface AddRemoveElementsTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item[];
  conclusion: string;
}

interface Item {
  title: string;
  description: string;
}
