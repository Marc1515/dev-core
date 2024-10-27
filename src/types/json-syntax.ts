export interface JSONSyntaxPageTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item2[];
  conclusion: string;
}

interface Item2 {
  title: string;
  description: string;
  items?: Item[];
}

interface Item {
  title: string;
  description: string;
}
