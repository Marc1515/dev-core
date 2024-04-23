export interface JSONSyntaxPageTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item2[];
}

interface Item2 {
  title: string;
  description?: string;
  items?: Item[];
}

interface Item {
  description: string;
}
