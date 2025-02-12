import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, Search } from 'lucide-react';
import { useCart } from '../store/useCart';

export function Navbar() {
  const cartItems = useCart((state) => state.items);
  const itemCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-pink-600">Bella Beauty</span>
          </Link>

          <div className="flex-1 max-w-lg mx-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full px-4 py-2 rounded-full border border-gray-300 focus:outline-none focus:border-pink-500"
              />
              <Search className="absolute right-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <Link
              to="/account"
              className="text-gray-600 hover:text-pink-600 transition-colors"
            >
              <User className="h-6 w-6" />
            </Link>
            <Link
              to="/cart"
              className="text-gray-600 hover:text-pink-600 transition-colors relative"
            >
              <ShoppingCart className="h-6 w-6" />
              {itemCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-pink-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {itemCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}