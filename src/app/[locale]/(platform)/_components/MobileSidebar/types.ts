export interface MobileSidebarTypes {
  data: Data;
}

export interface Data {
  home: Home;
  fundamentals: Fundamentals;
  front_end: Home;
  back_end: Home;
  data_bases: Home;
}

interface Fundamentals {
  title: string;
  html5: Html5;
  css3: Html5;
  javascript: Html5;
  typescript: Html5;
}

interface Html5 {
  path: string;
  title: string;
  description: string;
}

interface Home {
  title: string;
}
