export interface NavigationTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
}
