import MoneyIcon from "../../../assets/money-icon.svg";
import ExpensesIcon from "../../../assets/expanses-icon.svg";
import EarningsIcon from "../../../assets/earnings-icon.svg";

import { UserContext } from "./apiEntities";
import { useContext } from "react";
import { HeadBlock} from "../../_atoms/HeadBlock/HeadBlock";

export function StatementHead() {
  const userData = useContext(UserContext);

  const accounting = [
    {
      label: "Money",
      icon: MoneyIcon,
      amount: userData?.accounting.money,
    },
    {
      label: "Expenses",
      icon: ExpensesIcon,
      amount: userData?.accounting.expenses,
    },
    {
      label: "Earnings",
      icon: EarningsIcon,
      amount: userData?.accounting.earnings,
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
