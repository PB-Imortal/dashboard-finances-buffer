import { ReactNode } from "react";

export function TableData({children}: {children: ReactNode}) {
    return <td className="text-left	p-5">{children}</td>
} 