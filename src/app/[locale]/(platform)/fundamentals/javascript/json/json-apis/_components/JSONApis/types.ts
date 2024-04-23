export interface JSONApisTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item2[];
}

interface Item2 {
  title: string;
  items?: Item[];
  description?: string;
}

interface Item {
  description: string;
  title?: string;
}
