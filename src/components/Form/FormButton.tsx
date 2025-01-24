export default function FormButton({ name }: { name: string }) {
  return (
    <button
      type="submit"
      className="w-full py-2 rounded-md bg-emerald-600 hover:bg-emerald-800 dark:bg-white dark:hover:bg-emerald-100 text-white dark:text-emerald-600 transition-all duration-200"
    >
      {name}
    </button>
  );
}