import { ReactNode } from "react";

export function TableRow({children}: {readonly children: ReactNode}) {
    return <tr>{children}</tr>
}