interface FormSelectProps {
    label: string;
    options: string[];
} 

export function FormSelect ({label, options}: FormSelectProps) {
  return (
    <div className="flex gap-3 items-center">
        <label>{label}</label>
        <select className="flex border p-3 rounded-md">
            {
                options.map(option => 
                <option 
                    className="font-[600]"
                    key={option} 
                    value={option}>
                    {option}
                </option>)
            }
        </select>
    </div>
  );
}