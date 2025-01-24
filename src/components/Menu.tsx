import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import FoodCard from './FoodCard';

interface FoodItem {
  id: number;
  name: string;
  category:string;
  price: string;
  image: string;
}

export default function Menu() {
  const { filter: initialFilter } = useParams(); // Get the initial filter from the URL
  const [searchQuery, setSearchQuery] = useState(''); // State for search query
  const [selectedCategory, setSelectedCategory] = useState(initialFilter || ''); // State for selected category
  useEffect(()=>{
    setSelectedCategory(initialFilter||'');
  },[initialFilter])
  const allItems: FoodItem[] = [
    { id: 0, name: "Classic Breakfast", category: "Breakfast", price: "$10.00", image: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 1, name: "Cereal with Chocolate and Bananas", category: "Breakfast", price: "$12.00", image: "https://images.unsplash.com/photo-1640458348210-6c46cc136f18?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 2, name: "Cheese Burger", category: "Lunch", price: "$18.00", image: "https://images.unsplash.com/photo-1540981493580-8ea1113e9968?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 3, name: "Grilled Chicken Salad", category: "Lunch", price: "$15.00", image: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 4, name: "Margherita Pizza", category: "Lunch", price: "$16.00", image: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 5, name: "White Pasta", category: "Lunch", price: "$15.00", image: "https://images.unsplash.com/photo-1555949258-eb67b1ef0ceb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 6, name: "Red Pasta", category: "Lunch", price: "$12.00", image: "https://images.unsplash.com/photo-1598504774136-7afe4002c73b?q=80&w=1901&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 7, name: "Fresh Fruits", category: "Dinner", price: "$20.00", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 8, name: "Vanilla Ice Cream", category: "Desserts", price: "$8.00", image: "https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 9, name: "Red Velvet Cake", category: "Desserts", price: "$23.00", image: "https://images.unsplash.com/photo-1505976378723-9726b54e9bb9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { id: 10, name: "Fresh Orange Juice", category: "Beverages", price: "$5.00", image: "https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1857&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
  ];

   // Filter items based on search query and selected category
   const filteredItems = allItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory ? item.category.toLowerCase() === selectedCategory.toLowerCase() : true;
    return matchesSearch && matchesCategory;
  });

  // Get unique categories for the filter dropdown
  const categories = [...new Set(allItems.map((item) => item.category))];

  return (
    <section className="container w-10/12 mx-auto my-8">
      <h2 className="text-3xl font-bold text-center text-emerald-600 dark:text-white">
        {selectedCategory ? selectedCategory.toUpperCase() : "OUR MENU"}
      </h2>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row gap-4 mt-8">
        {/* Search Input */}
        <input
          type="text"
          placeholder="Search by name..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="p-2 border bg-emerald-700 text-white placeholder:text-white border-emerald-300 rounded-lg focus:outline-none"
        />

        {/* Category Filter Dropdown */}
        {!initialFilter&&<select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          className="p-2 border bg-emerald-700 text-white placeholder:text-white border-emerald-300 rounded-lg focus:outline-none"
        >
          <option value="">All Categories</option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>}
      </div>

      {/* Display Filtered Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8">
        {filteredItems.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </section>
  );
}