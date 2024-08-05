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

  function filterYear(year: string) {
    return statementContext.userAccounting.transactions?.filter(
      (transaction: Transaction) => {
        return (transaction.date.slice(6, 10) === year)
      })
  };

  return (
    <form className="flex justify-end gap-3 items-center">

      <button
        className="bg-txtpurple font-semibold py-0 px-2 text-bgwhite rounded-2xl"
        onClick={(e) => { e.preventDefault(); return toggleDisplayModal() }}>
        Filter
      </button>

      {
        displayModal &&
        <div className="bg-black bg-opacity-50 flex fixed w-full h-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 justify-center z-50 items-center">
          <div className="flex flex-col bg-bgwhite p-8 rounded-2xl gap-9 font-[600] inset-3">

            <span className="flex flex-row items-center gap-2 font-[700] text-2xl	">
              <svg width="31" height="31" viewBox="0 0 31 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8572 0.00131156C18.3427 0.00131156 20.7088 0.56397 22.8305 1.56994C23.1637 1.71814 23.4983 1.8952 23.8303 2.07357L22.3751 3.34579L20.1936 1.12663L16.4335 4.38323L14.2201 2.04341L7.30662 8.1133L11.7333 12.8808L10.0046 14.3603L14.3728 19.1278L12.6441 20.6072L18.8898 27.388L22.5875 24.071L25.802 27.6254C25.1646 28.0988 24.4676 28.5736 23.7108 28.9881C21.3206 30.3096 18.6268 31.0024 15.8878 31C7.12472 31 9.77862e-05 24.0422 9.77862e-05 15.4869C-0.0304401 6.98798 7.09551 0 15.8572 0M12.9455 14.5373L16.7362 11.2217L20.1325 14.9216L16.3418 18.2385L12.9455 14.5373ZM15.6448 20.9325L19.4049 17.588L22.8305 21.2879L19.0398 24.6048L15.6448 20.9325ZM10.2502 8.23396L14.0396 4.91703L17.4346 8.61825L13.6452 11.9339L10.2502 8.23396ZM17.1916 6.4568L20.0117 3.97009L22.5596 6.72305L19.7395 9.23993L17.1916 6.4568ZM22.2264 17.8556L25.0451 15.3688L27.5917 18.1507L24.7716 20.64L22.2264 17.8556ZM24.7119 23.452L27.532 20.9639L30.0773 23.7182L27.2585 26.2338L24.7119 23.452ZM25.8644 10.6603L27.7431 9.00254L29.4413 10.8387L27.5612 12.4965L25.8644 10.6603ZM23.4386 5.18328L25.3187 3.49661L27.0182 5.36165L25.1354 7.01946L23.4386 5.18328ZM28.2583 16.1387L30.1383 14.4809L31.867 16.3171L29.9578 17.9749L28.2583 16.1387ZM19.8006 12.0231L22.6207 9.53634L25.1673 12.2893L22.3472 14.7773L19.8006 12.0231Z" fill="#0D0D0E" />
              </svg>
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
