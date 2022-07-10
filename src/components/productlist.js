import useAPIData from "./useAPIData";
import SingleImageLoader from "./singleimageloader";

const url = "product_data.json";

const ProductList = () => {
  const products = useAPIData(url);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <SingleImageLoader productId={product.id} />
            <h1>{product.name}</h1>
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
