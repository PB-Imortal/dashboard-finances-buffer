import SimpleLogo from "../../../assets/simpleLogo.svg"
import FilterIcon from "../../../assets/filter.svg"

import { useContext, useState, useRef } from "react";
import { StatementContext } from "./apiEntities";
import type { Transaction } from "./apiEntities";
import ButtonComponent from "../../_atoms/Button/Button";

export function StatementFilter() {

  const statementContext = useContext(StatementContext);
  const [displayModal, setDisplayModal] = useState(false)

  function toggleDisplayModal() {
    setDisplayModal(!displayModal)
  };

  function filterMonth(month: string, base: Transaction[]) {
    return base.filter((transaction: Transaction) => {
      return (transaction.date.slice(3, 5) === month)
    })
  };

  function filterYear(year: string, base: Transaction[]) {
    return base.filter(
      (transaction: Transaction) => {
        return (transaction.date.slice(6, 10) === year)
      })
  };

  return (
    <form className="flex justify-end gap-3 items-center">

      <ButtonComponent
        arialabeltext="Filter"
        className="flex items-center gap-1 font-semibold px-2 text-txtpurple rounded-2xl text-lg hover:opacity-70"
        bgcolor="bg-bgwhite"
        onClick={(e) => { e.preventDefault(); return toggleDisplayModal() }}>
          <img src={FilterIcon} />
          Filter
      </ButtonComponent>

      {
        displayModal &&
        <div className="bg-black bg-opacity-50 flex fixed w-full h-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 justify-center z-50 items-center">
          <div className="flex flex-col bg-bgwhite p-8 rounded-2xl gap-9 font-[600] inset-3">

            <span className="flex flex-row items-center gap-2 font-[700] text-2xl	">
              <img src={SimpleLogo}/>
              Filter
            </span>

            <span className="flex flex-row items-center gap-3">
              <input type="text" placeholder="Search" className="bg-back p-1 border rounded-md" />

              <label>Type: </label>
              <select className="bg-back p-1 rounded-md">
                <option>All</option>
                <option>Debit</option>
                <option>Credit</option>
              </select>
            </span>


            <span className="flex flex-row items-center gap-3">
              <label>Amount: </label>
              <input type="number" placeholder="Min" className="w-20 p-1 border rounded-md" />
              -
              <input type="number" placeholder="Max" className="w-20 p-1 border rounded-md" />
            </span>

            <span>
              <label>Category: </label>
              <select className="bg-back p-1 rounded-md">
                <option>Transaction</option>
                <option>Shopping</option>
              </select>
            </span>

            <span className="flex flex-row items-center gap-3">
              <label>Date: </label>
              <input type="date" className="w-fit p-1 border rounded-md" />
              -
              <input type="date" className="w-fit p-1 border rounded-md" />
            </span>


            <span className="flex flex-row items-center justify-center gap-6">
              <ButtonComponent
                arialabeltext="filter"
                styles="font-semibold py-0 w-fit text-white"
                bgcolor="bg-bgblack">
                Submit
              </ButtonComponent>

              <ButtonComponent
                arialabeltext="filter"
                styles="font-semibold py-0 w-fit text-white"
                bgcolor="bg-bgblack"
                onClick={(e) => { e.preventDefault(); return toggleDisplayModal() }}>
                Cancel
              </ButtonComponent>
            </span>
          </div>
        </div>
      }

    </form>
  );
};
