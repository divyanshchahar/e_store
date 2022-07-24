// IMPORTING COMPONENETS
import TopNavBar from "./topnavbar.js";
import ProductList from "./productlist.js";
import Footer from "./footer.js";

const HomePage = () => {
  return (
    <>
      <TopNavBar />
      <div className="listofproducts">
        <ProductList />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
