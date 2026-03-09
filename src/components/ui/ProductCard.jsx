export default function ProductCard({ title, image, price, onAdd }) {
  return (
    <div>
      {/* Alto de 40 */}
      <img src={image} alt={title} className="h-40 mx-auto object-contain" />
      <h3 className="font-semibold mt-3 line-clamp-3">{title}</h3>
      <p className="text-blue-600 font-bold mt-2">${price}</p>

      <button
        onClick={onAdd}
        className="w-full mt-4 bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Agregar al carrito
      </button>
    </div>
  );
}
