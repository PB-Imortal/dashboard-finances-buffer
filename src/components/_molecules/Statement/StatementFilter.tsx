import { useContext } from "react";
import { StatementContext } from "./apiEntities";
import type { Transaction } from "./apiEntities";

export function StatementFilter() {
  
  const date = new Date();
  const statementContext = useContext(StatementContext);
  const filteredData = {year: filterYear(`${date.getFullYear()}`),};

  const months = [
    {label: "Jan", value: "01"}, {label: "Feb", value: "02"}, {label: "Mar", value: "03"}, {label: "Apr", value: "04"}, 
    {label: "May", value: "05"}, {label: "June", value: "06"}, {label: "July", value: "07"}, {label: "Aug", value: "08"}, 
    {label: "Sept", value: "09"}, {label: "Oct", value: "10"}, {label: "Nov", value: "11"}, {label: "Dec", value: "12"}
  ];

  function filterTerm() {
    return statementContext.userAccounting.transactions.filter((transaction: Transaction) => {
      return (transaction.description === statementContext.filter.term)
    })
  };
  
  function filterMonth(month: string) {
    return filteredData.year.filter((transaction: Transaction) => {
      return (transaction.date.slice(3,5) === month)
    })
  };

  function filterYear(year: string) {
    return statementContext.userAccounting.transactions?.filter((transaction: Transaction) => {
      return (transaction.date.slice(6,10) === year)
    })
  };

  function handleSelectYear(e: any) {
    filteredData.year = filterYear(e.target.value)
  };

  function handleSelectMonth(e: any) {
    filteredData.month = filterMonth(e.target.value)
  };

  function handleFilter() {
    statementContext.setFilteredData(filteredData.year)
  };

  function getYearsGap() {
    const gap = []
    for (let i = date.getFullYear(); i >= 2008; i--) { gap.push(i) }
    return gap
  };

  return (
    <form className="flex justify-end gap-3 items-center">
      <button onClick={(e) => { e.preventDefault(); return handleFilter()}}>Filter</button>

      <input
        type="text"
        className="bg-bgwhite border-separate rounded-md px-2"
        placeholder="Search"
      />

      <select onChange={(e) => handleSelectMonth(e)}className="border-separate rounded-md px-2">
        {months.map(month =>
          <option key={month.value} value={month.value}>{month.label}</option>)
        }
      </select>

      <select onChange={(e) => handleSelectYear(e)}className="border-separate rounded-md px-2">
        {getYearsGap().map(year =>
          <option key={year} value={year}>{year}</option>)
        }
      </select>

    </form>
  );
};