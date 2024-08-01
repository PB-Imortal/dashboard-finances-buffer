import { useContext } from "react"
import { StatementContext } from "./apiEntities"

export function StatementFilter() {
  const statementContext = useContext(StatementContext)
  return (
    <div className="flex gap-3 justify-end flex-row">
      <input
        type="month"
        className="border-separate p-2 rounded-lg max-w-fit	"
        onChange={(e) => statementContext.setFilter}
      />
    </div>
  )
}
/*      <input 
        type="text"
        className="border-separate p-2 rounded-lg max-w-fit" 
        placeholder="Search"
        onChange={(e) => statementContext.setFilter(e.target.value.toLowerCase())}  
      />*/