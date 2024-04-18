import { useTranslations } from "next-intl";

export default function Index() {
  const t = useTranslations("Home");

  console.log("Home");
  return <h1>Hello</h1>;
}
