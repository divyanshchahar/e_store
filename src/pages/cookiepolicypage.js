// IMPORTING COMPONENETS
import TopNavBar from "../layouts/topnavbar";
import Footer from "../layouts/footer";

// IMPORTING ASSETS
import cookiePolicyIcon from "../assets/images/cookies.png";

const CookiePolicyPage = () => {
  return (
    <>
      <TopNavBar />
      <div className="secondrypage">
        <h1>Cookie Policy</h1>
        <img src={cookiePolicyIcon} alt="not found" />
        <p>We are on a diet but thanks for asking</p>
      </div>
      <Footer />
    </>
  );
};

export default CookiePolicyPage;
