export interface ConditionalProps {
  data: Data;
}

interface Data {
  title: string;
  description: string;
  conditionals: Conditionals;
}

interface Conditionals {
  if: Mainfunction;
  if_else: Mainfunction;
  if_else_if_else: Mainfunction;
  switch: Mainfunction;
}

interface Mainfunction {
  title: string;
  description: string;
}
