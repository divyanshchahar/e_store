import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./pages/homepage";
import PrivacypolicyPage from "./pages/privacypolicypage";
import TermsofUsePage from "./pages/termsofusepage";
import CookiePolicyPage from "./pages/cookiepolicypage";
import ProductPage from "./pages/productpage";
import Cart from "./pages/cartpage";
import ErrorPage from "./pages/errorpage";
import UserPage from "./pages/userpage";
import LoginPage from "./pages/loginPage";
import UserSelectionPage from "./pages/userSelectionPage";
import UserHistoryPage from "./pages/userHistoryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacypolicyPage />} />
        <Route path="/termsofuse" element={<TermsofUsePage />} />
        <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/registeruser" element={<LoginPage />} />
        <Route path="/selectuser" element={<UserSelectionPage />} />
        <Route path="/userhistory/:id" element={<UserHistoryPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
