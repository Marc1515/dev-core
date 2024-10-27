export interface StringsManipulationTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  manipulation: Manipulation[];
  conclusion: string;
}

interface Manipulation {
  title: string;
  description: string;
  items?: Item[];
}

interface Item {
  title: string;
  description: string;
}
