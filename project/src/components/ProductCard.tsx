import React from 'react';
import { useCart } from '../store/useCart';
import { Product } from '../types';
import { ShoppingCart, Heart } from 'lucide-react';
import toast from 'react-hot-toast';
import { formatCurrency } from '../utils/currency';

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const addItem = useCart((state) => state.addItem);
  const [isWishListed, setIsWishListed] = React.useState(false);

  const handleAddToCart = () => {
    addItem(product);
    toast.success('Added to cart!');
  };

  const handleWishlist = () => {
    setIsWishListed(!isWishListed);
    toast.success(isWishListed ? 'Removed from wishlist' : 'Added to wishlist');
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow relative group">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover"
        />
        <button
          onClick={handleWishlist}
          className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-pink-50 transition-colors"
        >
          <Heart
            className={`h-5 w-5 ${
              isWishListed ? 'text-pink-600 fill-current' : 'text-gray-400'
            }`}
          />
        </button>
        {product.stock < 10 && product.stock > 0 && (
          <span className="absolute top-2 left-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Only {product.stock} left!
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
          <span className="text-sm font-medium text-pink-600 bg-pink-50 px-2 py-1 rounded">
            {product.category}
          </span>
        </div>
        <p className="text-sm text-gray-600 mb-4">{product.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-xl font-bold text-pink-600">
            {formatCurrency(product.price)}
          </span>
          <button
            onClick={handleAddToCart}
            disabled={product.stock === 0}
            className={`flex items-center space-x-2 px-4 py-2 rounded-full transition-colors ${
              product.stock === 0
                ? 'bg-gray-300 cursor-not-allowed'
                : 'bg-pink-600 hover:bg-pink-700 text-white'
            }`}
          >
            <ShoppingCart className="h-5 w-5" />
            <span>{product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}</span>
          </button>
        </div>
      </div>
    </div>
  );
}