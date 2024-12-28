import { Link, Outlet, useParams } from "react-router-dom";
import { products } from "../../../data";

function ProductDetails() {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId));

  if (!product) {
    return <h1>Product not found</h1>;
  }

  return (
    <div>
      <h1>{product.name}</h1>
      <p>Price: ${product.price}</p>
      <p>Description: {product.description}</p>
      <nav>
        <ul className="flex justify-between items-center px-8 py-6">
          <li>
            <Link to="reviews" className="bg-primary px-4 py-3 rounded-md text-white">Reviews</Link>
          </li>
          <li>
            <Link to="specifications" className="bg-primary px-4 py-3 rounded-md text-white">Specifications</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </div>
  );
}

export default ProductDetails;
