import { useState, useEffect } from "react";
import ProductCard from "../components/ui/ProductCard";

export default function Products({ onAddToCart }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div className="pt-24 px-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Productos</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            image={product.image}
            price={product.price}
            onAdd={() => onAddToCart(product)}
          />
        ))}
      </div>
    </div>
  );
}
