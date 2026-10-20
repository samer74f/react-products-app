import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import SupHeader from "./SupHeader";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [favorites, setFavorites] = useState([]);
  const [showFavorites, setShowFavorites] = useState(false);

  useEffect(() => {
    async function fetchProducts() {
      const response = await fetch(
        "https://dummyjson.com/products?limit=4"
      );

      const data = await response.json();

      setProducts(data.products);
    }

    fetchProducts();
  }, []);

  function toggleFavorite(product) {
    const isFavorite = favorites.some(function (item) {
      return item.id === product.id;
    });

    if (isFavorite) {
      setFavorites(
        favorites.filter(function (item) {
          return item.id !== product.id;
        })
      );
    } else {
      setFavorites([...favorites, product]);
    }
  }

  const filteredProducts = products.filter(function (product) {
    const matchesSearch = product.title
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFavorites =
      !showFavorites ||
      favorites.some(function (item) {
        return item.id === product.id;
      });

    return matchesSearch && matchesFavorites;
  });

  return (
    <div className="products-container">
      <h1>Products</h1>

      <SupHeader
        search={search}
        setSearch={setSearch}
        showFavorites={showFavorites}
        setShowFavorites={setShowFavorites}
      />

      {filteredProducts.map(function (product) {
        return (
          <ProductCard
            key={product.id}
            product={product}
            toggleFavorite={toggleFavorite}
            isFavorite={favorites.some(function (item) {
              return item.id === product.id;
            })}
          />
        );
      })}
    </div>
  );
}