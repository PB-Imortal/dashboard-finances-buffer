import { useContext, useEffect } from "react";
import { StatementContext } from "./apiEntities";
import type { Transaction } from "./apiEntities";
import ButtonComponent from "../../_atoms/Button/Button";

export function StatementFilter() {
  
  const date = new Date();
  const statementContext = useContext(StatementContext);
  const months = [
    {label: "Jan", value: "01"}, {label: "Feb", value: "02"}, {label: "Mar", value: "03"}, {label: "Apr", value: "04"}, 
    {label: "May", value: "05"}, {label: "June", value: "06"}, {label: "July", value: "07"}, {label: "Aug", value: "08"}, 
    {label: "Sept", value: "09"}, {label: "Oct", value: "10"}, {label: "Nov", value: "11"}, {label: "Dec", value: "12"}
  ];
  const filterBuffer = { 
    month: '01',
    year: filterYear(`${date.getFullYear()}`)
  };

  function getYearsGap() {
    const gap = []
    for (let i = date.getFullYear(); i >= 2008; i--) { gap.push(i) }
    return gap
  };

  function filterMonth(month: string) {
    return filterBuffer.year.filter((transaction: Transaction) => {
      return (transaction.date.slice(3,5) === month)
    })
  };

  function filterYear(year: string) {
    return statementContext.userAccounting.transactions?.filter(
      (transaction: Transaction) => {
      return (transaction.date.slice(6,10) === year)
    })
  };

  function handleFilter() {
    statementContext.setFilteredData(filterMonth(filterBuffer.month))
  };

  function handleReset() {
    statementContext.setFilteredData(statementContext.userAccounting.transactions.slice(0, 14))
  }

  function handleSelectYear(e: any) {
    filterBuffer.year = filterYear(e.target.value)
  };

  function handleSelectMonth(e: any) {
    filterBuffer.month = e.target.value
  };

  return (
    <form className="flex justify-end gap-3 items-center">
      
      <ButtonComponent 
        arialabeltext="filter"
        styles="font-semibold py-0 text-txtpurple"
        bgcolor="bg-bgwhite"
        onClick={(e) => { e.preventDefault(); return handleFilter()}}>
        Filter
      </ButtonComponent>

      <select 
        aria-labelledby="Month"
        className="border-separate rounded-md px-2 font-semibold"
        onChange={(e) => handleSelectMonth(e)}>
        {months.map(month =>
          <option key={month.value} value={month.value}>{month.label}</option>)
        }
      </select>

      <select 
        aria-labelledby="Year"
        className="border-separate rounded-md px-2 font-semibold"
        onChange={(e) => handleSelectYear(e)}>
        {getYearsGap().map(year =>
          <option key={year} value={year}>{year}</option>)
        }
      </select>

      <ButtonComponent 
        arialabeltext="filter"
        styles="font-semibold py-0 text-txtpurple"
        bgcolor="bg-bgwhite"
        onClick={(e) => { e.preventDefault(); return handleReset()}}>
        Reset
      </ButtonComponent>

    </form>
  );
};