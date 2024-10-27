export interface StylesModificationTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  modifications: Modification[];
  conclusion: string;
}

interface Modification {
  title: string;
  description: string;
}
