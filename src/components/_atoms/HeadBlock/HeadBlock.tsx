export type BalanceInfo = {
    label: string;
    icon: string;
    amount?: number;
}

export function HeadBlock({ data }: {readonly data: BalanceInfo}) {
    return (
        <div className="bg-bgwhite gap-3 p-4 rounded-2xl w-full min-w-52">
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
    )
}