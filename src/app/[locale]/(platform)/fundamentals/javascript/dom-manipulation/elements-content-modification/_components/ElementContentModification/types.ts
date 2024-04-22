export interface ElementContentModificationTypes {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  modifications: Modification[];
}

interface Modification {
  title: string;
  description: string;
}
