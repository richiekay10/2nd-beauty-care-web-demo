import React from 'react';
import { ProductCard } from '../components/ProductCard';

const FEATURED_PRODUCTS = [
  {
    id: '1',
    name: 'Radiance Serum',
    description: 'Brightening vitamin C serum for glowing skin',
    price: 299.99,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&q=80&w=800',
    category: 'Skincare',
    featured: true,
    stock: 50,
    created_at: new Date().toISOString(),
  },
  {
    id: '2',
    name: 'Hydrating Moisturizer',
    description: 'Deep hydration for all skin types',
    price: 189.99,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?auto=format&fit=crop&q=80&w=800',
    category: 'Skincare',
    featured: true,
    stock: 5,
    created_at: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Luxury Face Mask',
    description: 'Premium clay mask for deep cleansing',
    price: 149.99,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?auto=format&fit=crop&q=80&w=800',
    category: 'Skincare',
    featured: true,
    stock: 0,
    created_at: new Date().toISOString(),
  }
];

export function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-pink-100 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
              <span className="block">Discover Your Natural</span>
              <span className="block text-pink-600">Beauty</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Explore our curated collection of premium beauty and skincare products
              designed to enhance your natural radiance.
            </p>
            <div className="mt-8">
              <button className="btn">Shop Now</button>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Products */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Products</h2>
          <button className="text-pink-600 hover:text-pink-700 font-medium">
            View All →
          </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {FEATURED_PRODUCTS.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>

      {/* Categories */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Shop by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Skincare', 'Makeup', 'Haircare', 'Fragrance'].map((category) => (
              <div
                key={category}
                className="relative rounded-lg overflow-hidden group cursor-pointer h-40"
              >
                <div className="absolute inset-0 bg-pink-600 bg-opacity-40 group-hover:bg-opacity-50 transition-opacity" />
                <h3 className="absolute inset-0 flex items-center justify-center text-xl font-bold text-white">
                  {category}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="bg-gray-50 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Free Shipping</h3>
              <p className="text-gray-600">On orders above GH₵500</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Authentic Products</h3>
              <p className="text-gray-600">100% genuine products</p>
            </div>
            <div className="text-center p-6">
              <div className="bg-pink-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg className="h-8 w-8 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold mb-2">Money Back</h3>
              <p className="text-gray-600">30-day return policy</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}