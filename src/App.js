import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";

import HomePage from "./components/homepage";
import PrivacypolicyPage from "./components/privacypolicypage";
import TermsofUsePAge from "./components/termsofusepage";
import CookiePolicyPage from "./components/cookiepolicypage";
import ErrorPage from "./components/error";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/privacypolicy" element={<PrivacypolicyPage />} />
        <Route path="/termsofuse" element={<TermsofUsePAge />} />
        <Route path="/cookiepolicy" element={<CookiePolicyPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
}

export default App;
