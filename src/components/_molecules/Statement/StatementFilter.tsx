import { useContext } from "react"
import { StatementContext } from "./apiEntities"

export function StatementFilter() {
  const statementContext = useContext(StatementContext)
  return (
    <div className="flex gap-3 justify-end flex-row">
      <input
        type="text"
        className="border-separate px-2 rounded-lg max-w-fit"
        placeholder="Search"
        onChange={(e) => statementContext.setFilter(e.target.value.toLowerCase())}
      />     
      <form>
        <div className="bg-bgwhite border-separate px-2 rounded-lg max-w-fit">
          <div className="flex gap-2">
            <span>
              <select id="month" name="month">
                <option selected>January</option>
                <option>February</option>
                <option>March</option>
                <option>April</option>
                <option>May</option>
                <option>June</option>
                <option>July</option>
                <option>August</option>
                <option>September</option>
                <option>October</option>
                <option>November</option>
                <option>December</option>
              </select>
            </span>
            <span>
              <label>Year:</label>
              <select id="year" name="year"></select>
            </span>
          </div>
        </div>
      </form>
    </div>
  )
}
/*
      <input
        type="month"
        min="2008-01"
        max=""
        className="border-separate px-2 rounded-lg max-w-fit	"
        onChange={(e) => statementContext.setFilter}
      />
*/ 