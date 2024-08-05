import { StatementFilter } from '../../_molecules/Statement/StatementFilter'
import { StatementHead } from '../../_molecules/Statement/StatementHead'
import { StatementTable } from '../../_molecules/Statement/StatementTable'

export default function Statement() {

    

    return (
        <div className='bg-bggrey flex flex-col gap-4 p-4 w-full dark:bg-dkrbgblue'>
            <StatementHead />
            <StatementFilter />
            <StatementTable />
        </div>
    )
}