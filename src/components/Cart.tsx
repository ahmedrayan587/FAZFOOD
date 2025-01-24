import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext"; // Adjust the import path as needed
import FormInput from "./Form/FormInput";
import { toast } from "react-toastify";

export default function Cart() {
  const { cart, removeFromCart, removeAllFromCart, updateQuantity } = useCart();
  

  // Calculate subtotal
  const subtotal = cart.reduce(
    (total, item) => total + parseFloat(item.price.replace("$", "")) * (item.quantity || 1),
    0
  );
  let Navigate = useNavigate();
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    toast.success(`Order Submitted!`);
    removeAllFromCart();
    Navigate('/');
  };
  return (
    <div className="flex h-full flex-col shadow-xl">
        {/* Header */}
        <div className="flex-1 overflow-y-auto px-4 py-6 sm:px-6">
            <div className="flex items-start justify-between">
            <h2 className="text-lg font-medium text-emerald-600 dark:text-white" id="cart-title">
                Shopping Cart
            </h2>
            </div>

            {/* Cart Items */}
            <div className="mt-8">
            <div className="flow-root">
                <ul role="list" className="-my-6 divide-y divide-gray-200">
                {cart.map((item) => (
                    <li key={item.id} className="flex py-6">
                    {/* Product Image */}
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                        <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                        />
                    </div>

                    {/* Product Details */}
                    <div className="ml-4 flex flex-1 flex-col">
                        <div>
                        <div className="flex justify-between text-base font-medium text-emerald-600 dark:text-white">
                            <h3>{item.name}</h3>
                            <p className="ml-4">{item.price}</p>
                        </div>
                        <p className="mt-1 text-sm text-gray-600 dark:text-emerald-50">{item.category}</p>
                        </div>
                        <div className="flex flex-1 items-end justify-between text-sm">
                        {/* Quantity */}
                        <p className="text-gray-600 dark:text-emerald-50">
                            Quantity:{" "}
                            <input
                            type="number"
                            value={item.quantity}
                            onChange={(e) =>
                                updateQuantity(item.id, parseInt(e.target.value))
                            }
                            className="mt-1 p-2 w-1/2 border rounded-md text-emerald-600 placeholder:text-emerald-600 dark:bg-emerald-700 dark:text-white dark:placeholder:text-white dark:border-emerald-300 focus:outline-none"
                            min="1"
                            />
                        </p>

                        {/* Remove Button */}
                        <div className="flex">
                            <button
                            type="button"
                            onClick={() => removeFromCart(item.id)}
                            className="w-full py-2 px-4 rounded-md font-medium text-white bg-rose-600"
                            >
                            Remove
                            </button>
                        </div>
                        </div>
                    </div>
                    </li>
                ))}
                </ul>
            </div>
            </div>
        </div>

        {/* Footer */}
        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
            {/* Subtotal */}
            <div className="flex justify-between text-base font-medium text-emerald-600 dark:text-white">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
            </div>
            <p className="mt-0.5 text-sm text-gray-600 dark:text-emerald-50">
            Shipping and taxes calculated at checkout.
            </p>

            {/* Checkout Button */}


            {/* Continue Shopping */}
            <form onSubmit={handleSubmit} className="mt-6 flex flex-wrap justify-between items-baseline text-center text-sm text-gray-600 dark:text-emerald-50">
                <div className="flex flex-col text-start w-full">
                <FormInput name="Name" type="text" />
                <FormInput name="Phone" type="phone" />
                <FormInput name="Address" type="text" />
                </div>
                <button type="submit" className="flex items-center justify-center rounded-md border border-transparent px-6 py-3 text-base font-medium shadow-sm bg-emerald-600 hover:bg-emerald-800 dark:bg-white dark:hover:bg-emerald-100 text-white dark:text-emerald-600 transition-all duration-200">
                    Submit Order
                </button>
                <Link
                    to='/menu'
                    className="font-medium text-emerald-600 dark:text-white"
                    >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                </Link>
            </form>
        </div>
    </div>
  );
}