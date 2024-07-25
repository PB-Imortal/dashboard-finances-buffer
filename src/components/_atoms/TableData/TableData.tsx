import { ReactNode } from "react";

export function TableData({children, styleVariant}: {children: ReactNode, styleVariant?: string | undefined}) {
    return (
        styleVariant ? 
            <td className="font-medium text-left border-t py-3 md:p-2"><span className={styleVariant}>{children}</span></td>
            :
            <td className="text-left border-t py-3 md:p-2">{children}</td>
    )
} 