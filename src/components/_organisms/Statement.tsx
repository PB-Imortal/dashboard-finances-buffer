import { StatementHead } from '../_molecules/Statement/StatementHead'
import { StatementTable } from '../_molecules/Statement/StatementTable'

export default function Statement () {

    return (
        <div className='bg-bggrey flex flex-col gap-5 items-center p-2'>
            <StatementHead />
            <StatementTable />
        </div>
    )
}