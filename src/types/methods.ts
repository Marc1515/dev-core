export interface MethodsTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  key_differences: Keydifferences;
  conclusion: string;
}

interface Keydifferences {
  title: string;
  items: Item[];
}

interface Item {
  title: string;
  description: string;
}
