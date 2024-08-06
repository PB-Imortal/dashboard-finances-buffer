import { ReactNode } from "react";

export function TableRow({children}: {readonly children: ReactNode}) {
    return <tr className="flex dark:text-txwhite">{children}</tr>
}