import { createContext, useState, useContext, ReactNode } from "react";
import { toast } from "react-toastify";

// Define the Product type
interface Product {
    id: number;
    name: string;
    category:string;
    price: string;
    image: string;
    link?: string; // URL of the product image
    quantity?: number; // Optional because it's added when the product is added to the cart
  }

// Define the Cart Context type
interface CartContextType {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  removeAllFromCart: () => void;
  updateQuantity: (productId: number, quantity: number) => void;
  cartItemCount: number;
}

// Create the Cart Context with an initial value of `undefined`
const CartContext = createContext<CartContextType | undefined>(undefined);

// Custom hook to use the Cart Context
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

// Cart Provider Component
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<Product[]>([]);

  // Add a product to the cart
  const addToCart = (product: Product) => {
    setCart((prevCart) => {
      const existingProduct = prevCart.find((item) => item.id === product.id);
      if (existingProduct) {
        return prevCart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: (item.quantity || 0) + 1 }
            : item
        );
      } else {
        toast.success(`${product.name} added to cart!`);
        return [...prevCart, { ...product, quantity: 1 }];
      }
    });
  };

  // Remove a product from the cart
  const removeFromCart = (productId: number) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const removeAllFromCart = () => {
    setCart([]);
  };

  // Update the quantity of a product in the cart
  const updateQuantity = (productId: number, quantity: number) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity } : item
      )
    );
  };

  // Calculate the total number of items in the cart
  const cartItemCount = cart.reduce((total, item) => total + (item.quantity || 0), 0);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, removeAllFromCart, updateQuantity, cartItemCount }}
    >
      {children}
    </CartContext.Provider>
  );
};