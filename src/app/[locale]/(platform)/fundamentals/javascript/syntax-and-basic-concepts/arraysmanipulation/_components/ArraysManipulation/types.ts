export interface ArraysManipulationTypes {
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
  items?: Item[];
  description?: string;
}

interface Item {
  description: string;
}
