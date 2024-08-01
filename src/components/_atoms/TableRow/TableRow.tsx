import { ReactNode } from "react";

export function TableRow({children}: {readonly children: ReactNode}) {
    return <tr className="flex">{children}</tr>
}