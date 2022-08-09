import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import Cart from "./components/cartpage";
import ErrorPage from "./components/error";
import UserHandler from "./components/userhandler";

import HomePage from "./pages/homepage";
import PrivacypolicyPage from "./pages/privacypolicypage";
import TermsofUsePage from "./pages/termsofusepage";
import CookiePolicyPage from "./pages/cookiepolicypage";
import ProductPage from "./pages/productpage";

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
        <Route path="/loginpage" element={<UserHandler />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
