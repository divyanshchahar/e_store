import useAPIData from "./useAPIData";

const url = "product_data.json";

const ProductList = () => {
  const products = useAPIData(url);
  return (
    <>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <h1>{product.name}</h1>
            <p>{product.price}</p>
          </div>
        );
      })}
    </>
  );
};

export default ProductList;
