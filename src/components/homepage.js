// IMPORTING COMPONENETS
import TopNavBar from "./topnavbar.js";
import ProductList from "./productlist.js";
import Footer from "./footer.js";

const HomePage = () => {
  return (
    <>
      <TopNavBar />
      <div className="listofproducts">
        <div className="sortingrow">
          <button>Sort: Name (A to Z)</button>
          <button>Sort: Name (Z to A)</button>
          <button>Sort: Price (Ascending)</button>
          <button>Sort: Price (Descending)</button>
        </div>
        <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
