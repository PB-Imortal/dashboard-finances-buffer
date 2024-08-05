export function StatementFilter() {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sept",
    "Oct",
    "Nov",
    "Dec",
  ];

  function getYearsGap() {
    const date = new Date();
    const gap = [];
    for (let i = date.getFullYear(); i >= 2008; i--) {
      gap.push(i);
    }
    return gap;
  }

  return (
    <form className="flex justify-end gap-3 items-center dark:text-txwhite">
      <button>Filter</button>

      <input
        type="text"
        className="bg-bgwhite border-separate rounded-md px-2 dark:bg-dkrbgitenseblue"
        placeholder="Search"
      />

      <select className="border-separate rounded-md px-2 dark:bg-dkrbgitenseblue">
        {months.map(month =>
            <option key={month} value={month}>{month}</option>)
        }
      </select>
      
      <select className="border-separate rounded-md px-2 dark:bg-dkrbgitenseblue">
        {getYearsGap().map(year => 
          <option key={year} value={year}>{year}</option>)
        }
      </select>
    </form>
  );
}
