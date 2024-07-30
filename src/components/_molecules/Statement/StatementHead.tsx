import MoneyIcon from "../../../assets/money-icon.svg";
import ExpensesIcon from "../../../assets/expanses-icon.svg";
import EarningsIcon from "../../../assets/earnings-icon.svg";

import { HeadBlock} from "../../_atoms/HeadBlock/HeadBlock";
import { useContext } from "react";
import { StatementContext } from "./apiEntities";

export function StatementHead() {
  const statementContext = useContext(StatementContext)

  const accounting = [
    {
      label: "Money",
      icon: MoneyIcon,
      amount: statementContext.userData?.accounting.money,
    },
    {
      label: "Expenses",
      icon: ExpensesIcon,
      amount: statementContext.userData?.accounting.expenses,
    },
    {
      label: "Earnings",
      icon: EarningsIcon,
      amount: statementContext.userData?.accounting.earnings,
    },
  ];

  return (
    <div 
      className="flex gap-6 overscroll-none rounded-2xl sm:overflow-scroll w-full md:overflow-hidden"
    >
      {accounting.map((item) => <HeadBlock key={item.label} data={item}/>)}
    </div>
  );
}
