import SimpleLogo from "../../../assets/simpleLogo.svg"
import FilterIcon from "../../../assets/filter.svg"
import SearchIcon from "../../../common/svg/SearchIcon";

import ButtonComponent from "../../_atoms/Button/Button";
import FormInput from "../../_atoms/Input/FormInput";

import { useContext, useState, useRef } from "react";
import { useForm } from "react-hook-form";
import { StatementContext, Transaction } from "./apiEntities";
import { formFilter } from "../../../common/functions/validations";
import { zodResolver } from "@hookform/resolvers/zod";
import type { FormFilter } from "../../../common/functions/validations";
import { FormSelect } from "../../_atoms/Select/FormSelect";

export function StatementFilter() {

  const statementContext = useContext(StatementContext);
  const [displayModal, setDisplayModal] = useState(false);
  const [hasFilterError, setHasFilterError] = useState<string>("")
  const typeSelectRef = useRef(null);
  const searchInputRef = useRef(null);
  const categorySelectRef = useRef(null);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<FormFilter>({
    resolver: zodResolver(formFilter),
  });

  function toggleDisplayModal() {
    setDisplayModal(!displayModal)
    setHasFilterError("")
  };

  function onSubmit() {
    const byCatergory = statementContext.userAccounting.transactions.filter(
      (transaction: Transaction) =>
        (transaction.type == categorySelectRef.current.value)
    )

    const byType = byCatergory.filter(
      (transaction: Transaction) => {
        if (typeSelectRef.current.value === "Debit") return transaction.amount < 0;
        return transaction.amount >= 0;
      })
    if (byType.length === 0) { setHasFilterError("No matching transactions"); return }
    statementContext.setFilteredData(byType)
    toggleDisplayModal()
  }

  console.log(errors)
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex justify-end gap-3 items-center">

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
          <div className="flex flex-col bg-bgwhite p-8 rounded-2xl gap-9 font-[600] inset-3">
            <span className="flex flex-row items-center gap-2 font-[700] text-2xl">
              <img src={SimpleLogo} />
              Filter
            </span>

            <FormInput
              {...register("term")}
              id="F001"
              placeholder="Seach"
              type="text"
              startSvg={<SearchIcon />}
              error={errors.term?.message}
            />

            <div className="flex items-center gap-3">
              <span>Amount:</span>
              <span className="text-red-500">{errors.maxAmount?.message}</span>
              <span className="flex justify-center gap-1 w-fit">
                <FormInput
                  {...register("minAmount")}
                  aria-labelledby="Min Amount"
                  id="F002"
                  placeholder="Min"
                  style={{ width: "88px"}}
                  type="number"
                />
                <FormInput
                  {...register("maxAmount")}
                  aria-labelledby="Max Amount"
                  id="F003"
                  placeholder="Max"
                  style={{ width: "88px" }}
                  type="number"
                />
              </span>
            </div>

            <FormSelect
              label="Type"
              options={["All", "Debit", "Credit"]}
            />

            <FormSelect
              label="Category"
              options={["Shopping", "Transfer"]}
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

            {hasFilterError && <span className="text-txtred p-0">{hasFilterError}</span>}
          </div>
        </div>
      }
    </form>
  );
};