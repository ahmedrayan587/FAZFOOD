import { useCart } from "../context/CartContext";

interface FoodItem {
  id: number;
  name: string;
  category:string;
  price: string;
  image: string;
}

interface FoodCardProps {
  item: FoodItem;
}

export default function FoodCard({ item }: FoodCardProps) {
  const { addToCart } = useCart();
  return (
    <div className="pb-4 bg-white shadow-lg rounded-lg dark:bg-emerald-700 lg:dark:bg-emerald-800 md:dark:bg-emerald-800 text-emerald-600 dark:text-white">
      <img src={item.image} alt={item.name} className="w-full h-48 rounded-t-lg object-cover" />
      <h3 className="px-4 text-xl font-semibold mt-4 whitespace-nowrap overflow-hidden text-ellipsis">
        {item.name}
      </h3>
      <p className="px-4 text-emerald-600 dark:text-emerald-100">{item.price}</p>
      <button onClick={()=>{addToCart(item)}} className="w-11/12 block mx-auto mt-4 p-2 rounded bg-emerald-600 hover:bg-emerald-800 dark:bg-white dark:hover:bg-emerald-100 text-white dark:text-emerald-600 transition-all duration-200">
        Add To Cart
      </button>
    </div>
  );
}