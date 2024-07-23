import { ExtractTable } from '../_molecules/Statement/ExtractTable'
import { ExtractHead } from '../_molecules/Statement/ExtractHead'

export default function Statement () {

    return (
        <div className='bg-bggrey flex flex-col gap-3 items-center p-3'>
            <ExtractHead />
            <ExtractTable />
        </div>
    )
}