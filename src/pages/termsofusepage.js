// IMPORTING COMPONENETS
import TopNavBar from "../layouts/topnavbar";
import Footer from "../layouts/footer";

// IMPORTING ASSETS
import termsOfUSeIcon from "../assets/images/terms_of_use.png";

const TermsofUsePAge = () => {
  return (
    <>
      <TopNavBar />
      <div className="secondrypage">
        <h1>Terms of Use</h1>
        <img src={termsOfUSeIcon} alt="not found" />
        <p>Don't copy any of the source code and everything is fine</p>
        <Footer />
      </div>
    </>
  );
};

export default TermsofUsePAge;
