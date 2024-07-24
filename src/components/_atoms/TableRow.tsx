import { ReactNode } from "react";

export function TableRow({children}: {children?: ReactNode}) {
    return <tr className='border-b'>{children}</tr>
}