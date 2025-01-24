import FoodCard from './FoodCard';

interface FoodItem {
  id: number;
  name: string;
  category:string;
  price: string;
  image: string;
}

export default function Specials() {
  const foodItems: FoodItem[] = [
    { id: 2, name: "Cheese Burger", category: "Lunch", price: "$18.00", image: "https://images.unsplash.com/photo-1540981493580-8ea1113e9968?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Margherita Pizza", category: "Lunch", price: "$16.00", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "White Pasta", category: "Lunch", price: "$15.00", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Red Pasta", category: "Lunch", price: "$12.00", image: "https://images.unsplash.com/photo-1598504774136-7afe4002c73b?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

  return (
    <section className="container w-10/12 mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-emerald-600 dark:text-white">Our Specialties</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {foodItems.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}