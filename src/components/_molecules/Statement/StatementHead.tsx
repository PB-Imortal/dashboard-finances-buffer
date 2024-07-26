import MoneyIcon from "../../../assets/money-icon.svg";
import ExpensesIcon from "../../../assets/expanses-icon.svg";
import EarningsIcon from "../../../assets/earnings-icon.svg";

import { UserContext } from "./apiEntities";
import { useContext } from "react";

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
    <section className="flex gap-6 overscroll-none rounded-2xl sm:overflow-scroll w-full md:overflow-hidden">
      {accounting.map((data) => (
        <div
          key={data.label}
          className="bg-bgwhite gap-3 p-4 rounded-2xl w-full min-w-52"
        >
          <div className="flex items-center gap-4">
            <img src={data.icon} alt={`${data.label} icon`} />

            <div className="flex flex-col">
              <span>{data.label}</span>
              <span className="font-semibold text-txtpurple text-xl">
                ${data.amount}
              </span>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
