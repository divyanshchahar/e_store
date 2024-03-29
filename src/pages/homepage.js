// IMPORTING FUNCTIONALITY
import { useState } from "react";

// IMPORTING COMPONENETS
import TopNavBar from "../layouts/topnavbar";
import ProductList from "../layouts/productlist";
import Footer from "../layouts/footer";

const HomePage = () => {
  const [args, setArgs] = useState("http://localhost:3001/product_data");
  return (
    <>
      <TopNavBar />
      <div className="sortingrow">
        <button
          onClick={() =>
            setArgs("http://localhost:3001/product_data?_sort=name&_order=asc")
          }
        >
          Sort: Name (A to Z)
        </button>

        <button
          onClick={() =>
            setArgs("http://localhost:3001/product_data?_sort=name&_order=desc")
          }
        >
          Sort: Name (Z to A)
        </button>

        <button
          onClick={() =>
            setArgs("http://localhost:3001/product_data?_sort=price&_order=asc")
          }
        >
          Sort: Price (Ascending)
        </button>

        <button
          onClick={() =>
            setArgs(
              "http://localhost:3001/product_data?_sort=price&_order=desc"
            )
          }
        >
          Sort: Price (Descending)
        </button>
      </div>
      <div className="listofproducts">
        <ProductList url={args} />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
