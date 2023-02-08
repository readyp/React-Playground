import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import DetailRecipe from "./components/pages/DetailRecipe";
import SearchRecipe from "./components/pages/SearchRecipe";
import CreateRecipe from "./components/pages/CreateRecipe";
import AboutPage from "./components/pages/AboutPage";
import PageNotFound from "./components/pages/PageNotFound";
function App() {
  return (
    <Router>
      <main className="flex min-h-screen flex-col justify-between">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipes/:recipeId" element={<DetailRecipe />} />
          <Route path="/search" element={<SearchRecipe />} />
          <Route path="/create" element={<CreateRecipe />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </main>
    </Router>
  );
}

export default App;
