import { Metadata } from "next";
import AboutComponent from "@/components/about/component";

export const metadata: Metadata = {
  title: "About",
};

export default function Page() {
  return <AboutComponent />;
}
