export interface StringsManipulationTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  manipulation: Manipulation[];
}

interface Manipulation {
  title: string;
  description?: string;
  items?: Item[];
}

interface Item {
  description: string;
}
