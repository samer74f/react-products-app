export default function SupHeader({
  search,
  setSearch,
  showFavorites,
  setShowFavorites,
}) {
  return (
    <div>
      <input
        type="text"
        placeholder="Search products"
        value={search}
        onChange={function (event) {
          setSearch(event.target.value);
        }}
      />

      <button
        onClick={function () {
          setShowFavorites(!showFavorites);
        }}
      >
        {showFavorites ? "Show All Products" : "Favorites"}
      </button>
    </div>
  );
}
