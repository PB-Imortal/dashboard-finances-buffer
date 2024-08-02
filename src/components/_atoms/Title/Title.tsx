import { ReactNode } from "react";

export default function Title({ children }: { readonly children: ReactNode }) {
  return <h1 className="text-txblack text-2xl font-extrabold dark:text-txwhite">{children}</h1>;
}
