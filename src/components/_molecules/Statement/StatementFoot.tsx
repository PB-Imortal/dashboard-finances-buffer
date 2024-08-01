import { useContext } from "react"
import { StatementContext } from "./apiEntities"

export function StatementFoot() {
  const statementContext = useContext(StatementContext)
  return (
    <div className="flex justify-center">
        <p>{statementContext.accounting?.transactions.length}</p>
        <button className="text-semibold text-txtpurple">Next</button>
    </div>
  )
}