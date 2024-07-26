import { ReactNode } from "react";

export function TableData({children, variantStyle}: {readonly children: ReactNode, readonly variantStyle?: string}) {
    const style = variantStyle ? `font-medium ${variantStyle}` : ''
    return (
        <td className={`text-left border-t py-3 md:p-2 ${style}`}>{children}</td>
    )
}