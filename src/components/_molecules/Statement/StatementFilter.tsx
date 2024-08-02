import { useContext } from "react"
import { StatementContext } from "./apiEntities"

export function StatementFilter() {

  const statementContext = useContext(StatementContext)

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];


  function getYearsGap() {
    let date = new Date
    const gap = []
    for(let i = date.getFullYear(); i >= 2008; i--) {gap.push(i)}
    return gap
  }


  return (
    <form className="flex justify-end gap-3 items-center">
      <button>Filter</button>
      
      <input
        type="text"
        className="bg-bgwhite border-separate rounded-md px-2"
        placeholder="Search"
      />

      <select className="border-separate rounded-md px-2">
        {months.map(month =>
            <option key={month} value={month}>{month}</option>)
        }
      </select>
      
      <select className="border-separate rounded-md px-2">
        {getYearsGap().map(year => 
          <option key={year} value={year}>{year}</option>)
        }
      </select>

    </form>
  )
}