export default function ProductCard({
  product,
  toggleFavorite,
  isFavorite,
}) {
  return (
    <div className="product-card">
      <h2>{product.title}</h2>

      <img
        src={product.thumbnail}
        alt={product.title}
      />

      <p>{product.description}</p>

      <p>Price: ${product.price}</p>

      <button
        onClick={function () {
          toggleFavorite(product);
        }}
      >
        {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
      </button>
    </div>
  );
}