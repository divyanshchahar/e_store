// IMPORTING FUNCTIONALITY
import { Link } from "react-router-dom";

// IMPORTING COMPONENTS
import useAPIData from "../utils/useAPIData";
import SingleImageLoader from "../utils/singleimageloader";
import addToCart from "../middleware/addtocart";

const ProductList = ({ url }) => {
  const products = useAPIData(url);

  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id} className="product">
            <Link className="productimg" to={`/product/${product.id}`}>
              <SingleImageLoader productId={product.id} />
            </Link>

            <div className="productdetail">
              <Link to={`/product/${product.id}`}>
                <h1>{product.name}</h1>
              </Link>
              <p>{"$ ".concat(product.price)}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
