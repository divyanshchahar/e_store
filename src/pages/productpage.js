// IMPORTING FUNCTIONALITY
import { useParams } from "react-router-dom";

// IMPORTING COMPONENTS
import useAPIData from "../utils/useAPIData";
import DetailLoader from "../utils/detailloader";
import MultiImageLoader from "../utils/mutliimageloader";
import TopNavBar from "../layouts/topnavbar";
import Footer from "../layouts/footer";

const ProductPage = () => {
  const { id } = useParams();
  const products = useAPIData("http://localhost:3001/product_data");
  const [filteredProduct] = products.filter((item) => item.id === id);

  return (
    <>
      {typeof filteredProduct === "undefined" && <h1>Loading...</h1>}
      {typeof filteredProduct === "object" && (
        <>
          <TopNavBar />
          <div className="productpage">
            <MultiImageLoader productId={filteredProduct.id} />
            <div className="detailsofproduct">
              <DetailLoader productdetails={filteredProduct} />
            </div>
          </div>
          <Footer />
        </>
      )}
    </>
  );
};

export default ProductPage;
