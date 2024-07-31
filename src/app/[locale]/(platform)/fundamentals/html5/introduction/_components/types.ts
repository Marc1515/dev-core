export interface Html5IntroductionTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  items: Item[];
  basic_structure: Basicstructure;
  conclusion: string;
}

interface Basicstructure {
  title: string;
  description: string;
  items: Item2[];
}

interface Item2 {
  title: string;
  description: string;
}

interface Item {
  description: string;
}
