import SimpleLogo from "../../../assets/simpleLogo.svg"
import FilterIcon from "../../../assets/filter.svg"
import SearchIcon from "../../../common/svg/SearchIcon";

import ButtonComponent from "../../_atoms/Button/Button";
import FormInput from "../../_atoms/Input/FormInput";

import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { StatementContext } from "../../../providers/context/StatementContextProvider";
import { formFilter } from "../../../common/functions/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormFilter } from "../../../common/functions/validations";
import { FormSelect } from "../../_atoms/Select/FormSelect";
import { Transaction } from "../../../common/entities/entities";

export function StatementFilter() {
  const statementContext = useContext(StatementContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [hasNoMatch, setHasNoMatch] = useState<string>("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormFilter>({
    resolver: zodResolver(formFilter),
  });

  function toggleDisplayModal() {
    setDisplayModal(!displayModal)
    setHasNoMatch("")
  };

  function getCurrentDate () {
    const date = new Date;
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0")
    return `${year}-${month}`
  }

  function onSubmit({
    category,
    date,
    term,
    type }: FormFilter) {

    const byDate = statementContext.userAccounting.transactions.filter(
      (transaction: Transaction) => 
        transaction.date.slice(6,10).includes(date.slice(0, 4)) &&
        transaction.date.slice(3,5).includes(date.slice(5, 7))
    );

    const byCatergory = category === "All" ? byDate : byDate.filter(
      (transaction: Transaction) =>
        (transaction.type == category)
    );
    
    const byType = type === "All" ? byCatergory : byCatergory.filter(
      (transaction: Transaction) => {
        if (type === "Debit") { return transaction.amount < 0 };
        return transaction.amount > 0;
      });

    const byTerm = byType.filter(
      (transaction: Transaction) => {
        return (transaction.description.includes(term))
      });

    if (byTerm.length === 0) { setHasNoMatch("No matches."); return }
    statementContext.setFilteredData(byTerm)
    toggleDisplayModal()
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-end gap-3 items-center"
    >
      <ButtonComponent
        arialabeltext="Filter"
        className="flex items-center gap-2 font-semibold px-2 rounded-2xl text-lg hover:opacity-70"
        bgcolor="bg-bgwhite"
        onClick={(e) => { e.preventDefault(); return toggleDisplayModal() }}>
        <img src={FilterIcon} />
        Filter
      </ButtonComponent>

      {
        displayModal &&
        <div className="bg-black bg-opacity-50 flex fixed w-full h-full top-2/4 left-2/4 -translate-x-1/2 -translate-y-1/2 justify-center z-50 items-center">
          <div className="flex flex-col bg-bgwhite p-8 rounded-2xl gap-7 font-[600] inset-3">
            <span className="flex flex-row items-center gap-2 font-[700] text-2xl">
              <img src={SimpleLogo} />
              Filter
            </span>

            <FormInput
              {...register("term")}
              id="F001"
              placeholder="Search"
              type="text"
              startSvg={<SearchIcon />}
              error={errors.term?.message}
            />

            <FormSelect
              {...register("type")}
              label="Type:"
              forwId="S001"
              options={["All", "Debit", "Credit"]}
            />
            
            <span className="flex gap-3 items-center">
              <label htmlFor="filter-date">Date:</label>
              <input
                id="filter-date"
                {...register("date")}
                className="p-3 border rounded-md"
                defaultValue={getCurrentDate()}
                type="month"
                min="2008-01"
                max={getCurrentDate()}
              />
            </span>
            
            <FormSelect
              {...register("category")}
              label="Category:"
              forwId="S002"
              options={["All", "Shopping", "Transfer"]}
            />

            <span className="flex gap-3 justify-center">
              <ButtonComponent
                arialabeltext="filter"
                styles="font-semibold py-1 w-fit text-white"
                bgcolor="bg-bgblack"
                type="submit"
              >
                Submit
              </ButtonComponent>

              <ButtonComponent
                arialabeltext="filter"
                styles="font-semibold py-1 w-fit text-white"
                bgcolor="bg-bgblack"
                onClick={(e) => { e.preventDefault(); return toggleDisplayModal() }}>
                Cancel
              </ButtonComponent>
            </span>

            {hasNoMatch && <span className="text-txtred p-0">{hasNoMatch}</span>}
          </div>
        </div>
      }
    </form>
  );
};