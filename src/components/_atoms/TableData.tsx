export function TableData({content, tags}: {content: string | number, tags?: JSX.Element}) {
    return (
        <td className="p-5">
            {(tags) ? tags : content}
        </td>
    )
} 