import { ReactNode } from "react";

export default function Title({ children }: { readonly children: ReactNode }) {
  return <h1 className="text-black text-2xl font-extrabold">{children}</h1>;
}
