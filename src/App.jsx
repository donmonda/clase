import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import Toast from "./components/ui/Toast";
import { useState } from "react";

import Home from "./screens/Home";
import Products from "./screens/Products";
import Contact from "./screens/Contact";
import CartModal from "./components/ui/CartModal";

export default function App() {
  const [cart, setCart] = useState([]);
  const [toast, setToast] = useState("");
  const [cartOpen, setCartOpen] = useState(false);

  const showToast = (text) => {
    setToast(text);
    setTimeout(() => setToast(""), 3000);
  };

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
    showToast(`${product.title} agregado al carrito`);
  };

  const removeFromCart = (index) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const checkout = () => {
    showToast("Compra realizada con éxito 🎉");
    setCart([]);
    setCartOpen(false);
  };

  return (
    <BrowserRouter>
      <MainLayout cartCount={cart.length} openCart={() => setCartOpen(true)}>
        <Routes>
          <Route path="/" element={<Home />} />

          <Route
            path="/products"
            element={<Products onAddToCart={handleAddToCart} />}
          />

          <Route path="/contact" element={<Contact />} />
        </Routes>

        {toast && <Toast message={toast} />}

        {cartOpen && (
          <CartModal
            cart={cart}
            onClose={() => setCartOpen(false)}
            removeFromCart={removeFromCart}
            checkout={checkout}
          />
        )}
      </MainLayout>
    </BrowserRouter>
  );
}
