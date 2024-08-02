import { useContext, useRef } from "react"
import { StatementContext } from "./apiEntities"
import type { TransactionsFilter, Transaction } from "./apiEntities";

export function StatementFilter() {

  const statementContext = useContext(StatementContext);

  const termRef = useRef(null);
  const monthRef = useRef(null);
  const yearRef = useRef(null);
  const date = new Date()
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"];

  const filteredData = {
    month: filterMonth(`${date.getMonth()}`)
    year: filterYear(`${date.getFullYear()}`)
  }
  console.log(filteredData.year)

  function filterTerm() {
    return statementContext.userAccounting.transactions.filter((transaction: Transaction) => {
      return (transaction.description === statementContext.filter.term)
    })
  }
  
  function filterMonth(month: string) {
    return filteredData.year.filter((transaction: Transaction) => {
      return (transaction.date.slice(3,5) === month)
    })
  }

  function filterYear(year: string) {
    return statementContext.userAccounting.transactions?.filter((transaction: Transaction) => {
      return (transaction.date.slice(6,10) === year)
    })
  }

  function filterMonthAndYear(month: string, year: string) {
    return statementContext.userAccounting.transactions.filter((transaction: Transaction) => {
      return (transaction.date.slice(3,5) === month) && (transaction.date.slice(6,10) === year)
    })
  }

  function handleSelectYear(e: any) {
    filteredData.year = filterYear(e.target.value)
    console.log(filteredData.year)
  }
  function handleSelectMonth(e: any) {
    console.log(e.target.value)
    filteredData.month = filterMonth(e.target.value)
  }

  function setFilter() {
    statementContext.setFilter({
      term: termRef.current.value,
      month: monthRef.current.value,
      year: yearRef.current.value
    })
  }

  function getYearsGap() {
    const gap = []
    for (let i = date.getFullYear(); i >= 2008; i--) { gap.push(i) }
    return gap
  }

  return (
    <form className="flex justify-end gap-3 items-center">
      <button onClick={(e) => { e.preventDefault(); return setFilter() }}>Filter</button>

      <input
        type="text"
        className="bg-bgwhite border-separate rounded-md px-2"
        placeholder="Search"
        ref={termRef}
      />

      <select ref={monthRef} onChange={(e) => handleSelectMonth(e)}className="border-separate rounded-md px-2">
        {months.map(month =>
          <option key={month} value={month}>{month}</option>)
        }
      </select>

      <select ref={yearRef} onChange={(e) => handleSelectYear(e)}className="border-separate rounded-md px-2">
        {getYearsGap().map(year =>
          <option key={year} value={year}>{year}</option>)
        }
      </select>

    </form>
  )
}