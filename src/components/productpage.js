import useAPIData from "./useAPIData";
import { useParams } from "react-router-dom";
import DetailLoader from "./detailloader";
import MultiImageLoader from "./multiimageloader";

const ProductPage = () => {
  const { id } = useParams();
  const products = useAPIData("http://localhost:3001/product_data.json");
  const [filteredProduct] = products.filter((item) => item.id === id);

  return (
    <>
      {typeof filteredProduct === "undefined" && <h1>Loading...</h1>}
      {typeof filteredProduct === "object" && (
        <>
          <DetailLoader productdetails={filteredProduct} />
          <MultiImageLoader productId={filteredProduct.id} />
        </>
      )}
    </>
  );
};

export default ProductPage;
