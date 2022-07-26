// IMPORTING COMPONENETS
import TopNavBar from "./topnavbar";
import Footer from "./footer";

// IMPORTING ASSETS
import privacyPolicyIcon from "../assets/images/privacy_policy.png";

const PrivacypolicyPage = () => {
  return (
    <>
      <TopNavBar />
      <div className="secondrypage">
        <h1>Privacy Policy</h1>
        <img src={privacyPolicyIcon} alt="not found" />
        <p>Relax ! no data is being recorded.</p>
      </div>
      <Footer />
    </>
  );
};

export default PrivacypolicyPage;
