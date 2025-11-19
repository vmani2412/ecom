'use client';

import { useEffect, useState } from 'react';

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    images: string[];
}

export default function Products() {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState(true);
    const [offset, setOffset] = useState(0);
    const limit = 10;
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=${limit}`)
            .then((res) => res.json())
            .then((data) => {
                setProducts((prev) => [...prev, ...data]);
                setHasMore(data.length === limit);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
                setLoading(false);
            });
    }, [offset]);

    const loadMore = () => {
    setOffset((prev) => prev + limit);
  };

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-8">Products Page</h1>
                
                {loading ? (
                    <div className="text-center py-12">Loading...</div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div
                                key={product.id}
                                className="bg-white rounded-lg shadow hover:shadow-lg transition-shadow p-4"
                            >
                                <img
                                    src={product.images[0]}
                                    alt={product.title}
                                    className="w-full h-48 object-cover rounded mb-4"
                                />
                                <h2 className="font-semibold text-lg mb-2 line-clamp-2">
                                    {product.title}
                                </h2>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                    {product.description}
                                </p>
                                <p className="text-xl font-bold text-blue-600">${product.price}</p>
                            </div>
                        ))}
                    </div>
                )}

                 {hasMore && (
        <button
          onClick={loadMore}
          disabled={loading}
          style={{
            marginTop: 20,
            padding: "10px 20px",
            fontSize: 16,
            cursor: "pointer",
          }}
        >
          {loading ? "" : "Load More"}
        </button>
      )}

      {!hasMore && <p>No more products</p>}
            </div>
        </div>
    );
}