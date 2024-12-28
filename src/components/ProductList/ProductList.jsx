import { Link, useSearchParams } from "react-router-dom";
import { products } from "../../../data";

function ProductList() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("search") || "";

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = (e) => {
    setSearchParams({ search: e.target.value });
  };
  return (
    <div className="px-4">
      <h1>Our Products</h1>

      <input
        type="text"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full my-2 p-2 border-2 rounded-md focus:outline-none"
      />

      <ul>
        {filteredProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/products/${product.id}`}>{product.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductList;
