import { useState, useEffect} from 'react'
import { StatementHead } from '../_molecules/Statement/StatementHead'
import { StatementTable } from '../_molecules/Statement/StatementTable'

import { UserData } from '../_molecules/Statement/apiEntities'
import { UserContext } from '../_molecules/Statement/apiEntities'

export default function Statement () {

    const [userData, setUserData] = useState<UserData>()

    useEffect(() => {
        fetch('http://localhost:3000/users')
            .then(response => response.json())
            .then(data => setUserData(data[0]))
    }, [])

    return (
            <div className='bg-bggrey flex flex-col gap-5 h-full p-4 w-full'>
                <UserContext.Provider value={userData}>
                    <StatementHead />
                    <StatementTable />
                </UserContext.Provider>
            </div>
    )
}