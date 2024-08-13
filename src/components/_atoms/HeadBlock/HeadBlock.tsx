import { BalanceInfo } from "../../../common/entities/entities";

export function HeadBlock({ data }: { readonly data: BalanceInfo }) {
    return (
        <div 
            className="bg-bgwhite p-4 rounded-2xl w-full min-w-52 flex items-center gap-4  dark:bg-dkrbgitenseblue dark:text-txtgrey"
        >
            <img src={data.icon} alt={`${data.label} icon`} />

            <div className="flex flex-col">
                {data.label}
                <span className="font-semibold text-txtpurple text-xl dark:text-dkrpurple">
                    ${data.amount}
                </span>
            </div>
        </div>
    )
}