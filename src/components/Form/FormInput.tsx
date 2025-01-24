interface InputProps{
    name:string;
    type:string;
}
export default function FormInput(data:InputProps) {
  return (
    <div className="mb-4">
        <label htmlFor={data.name} className="block text-sm font-medium text-emerald-600 dark:text-white">{data.name}</label>
        <input type={data.type} id={data.name} name={data.name} required className="mt-1 p-2 w-full border rounded-md text-emerald-600 placeholder:text-emerald-600 dark:bg-emerald-700 dark:text-white dark:placeholder:text-white dark:border-emerald-300 focus:outline-none" />
    </div>
  )
}
