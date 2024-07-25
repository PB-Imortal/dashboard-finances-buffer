import { ReactNode } from "react";

export function TableData({children}: {children: ReactNode}) {
    return <td className="text-left border-t py-3 md:p-2">{children}</td>
} 