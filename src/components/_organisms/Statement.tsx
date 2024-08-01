import { StatementFoot } from '../_molecules/Statement/StatementFoot'
import { StatementHead } from '../_molecules/Statement/StatementHead'
import { StatementTable } from '../_molecules/Statement/StatementTable'

export default function Statement() {

    return (
        <div className='bg-bggrey flex flex-col gap-5 p-4 w-full'>
            <StatementHead />
            <StatementTable />
            <StatementFoot />
        </div>
    )
}