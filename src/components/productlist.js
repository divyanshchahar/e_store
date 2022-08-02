// IMPORTING FUNCTIONALITY
import { Link } from "react-router-dom";

// IMPORTING COMPONENTS
import useAPIData from "./useAPIData";
import SingleImageLoader from "./singleimageloader";

const ProductList = ({ url }) => {
  console.log(url);
  const products = useAPIData(url);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <div className="productimg">
              <Link to={`/product/${product.id}`}>
                <SingleImageLoader productId={product.id} />
              </Link>
            </div>

            <div className="productdetail">
              <Link to={`/product/${product.id}`}>
                <h1>{product.name}</h1>
              </Link>
              <p>{"$ ".concat(product.price)}</p>
              <button>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
