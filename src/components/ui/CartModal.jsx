import { FaTimes, FaTrash } from "react-icons/fa";

export default function CartModal({ cart, onClose, removeFromCart, checkout }) {
  const total = cart.reduce((sum, product) => sum + product.price, 0);

  return (
    <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
      <div className="bg-white w-[500px] max-h-[80vh] rounded-xl p-6 overflow-y-auto">
        {/* HEADER */}
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold">Carrito</h2>

          <button onClick={onClose}>
            <FaTimes />
          </button>
        </div>

        {/* LISTA PRODUCTOS */}
        {cart.length === 0 ? (
          <p className="text-gray-500">El carrito está vacío</p>
        ) : (
          <div className="space-y-4">
            {cart.map((product, index) => (
              <div
                key={index}
                className="flex items-center gap-4 border-b pb-3"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-12 h-12 object-contain"
                />

                <div className="flex-1">
                  <p className="text-sm font-semibold">{product.title}</p>

                  <p className="text-blue-600 font-bold">${product.price}</p>
                </div>

                {/* BOTON ELIMINAR */}
                <button
                  onClick={() => removeFromCart(index)}
                  className="text-red-500 hover:text-red-700"
                >
                  <FaTrash />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* TOTAL */}
        {cart.length > 0 && (
          <>
            <div className="flex justify-between mt-6 text-lg font-bold">
              <span>Total:</span>
              <span>${total.toFixed(2)}</span>
            </div>

            {/* FINALIZAR COMPRA */}
            <button
              onClick={checkout}
              className="w-full mt-4 bg-green-600 text-white p-3 rounded hover:bg-green-700 transition"
            >
              Finalizar Compra
            </button>
          </>
        )}
      </div>
    </div>
  );
}
