export interface JavascriptTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item[];
}

interface Item {
  path: string;
  title: string;
  description: string;
}
