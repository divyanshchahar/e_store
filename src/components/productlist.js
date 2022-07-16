import { Link } from "react-router-dom";

import useAPIData from "./useAPIData";
import SingleImageLoader from "./singleimageloader";

const url = "http://localhost:3001/product_data";

const ProductList = () => {
  const products = useAPIData(url);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Link to={`/product/${product.id}`}>
              <SingleImageLoader productId={product.id} />
            </Link>
            <Link to={`/product/${product.id}`}>
              <h1>{product.name}</h1>
            </Link>
            <p>{product.price}</p>
            <button>Add to Cart</button>
            <button>Buy Now</button>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
