import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/homepage";
import PrivacypolicyPage from "./components/privacypolicypage";
import TermsofUsePAge from "./components/termsofusepage";
import CookiePolicyPage from "./components/cookiepolicypage";
import ErrorPage from "./components/error";
import ProductPage from "./components/productpage";
import Cart from "./components/cartpage";
import UserHandler from "./components/userhandler";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacypolicyPage />} />
        <Route path="/termsofuse" element={<TermsofUsePAge />} />
        <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/loginpage" element={<UserHandler />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
