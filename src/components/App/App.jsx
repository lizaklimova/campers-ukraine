import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

const MainPage = lazy(() => import("pages/Main"));
const CatalogPage = lazy(() => import("pages/Catalog"));
const Favorites = lazy(() => import("pages/Favorites"));

const App = () => {
  return (
    <Suspense fallback={<div>Loading</div>}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<MainPage />} />
      </Routes>
    </Suspense>
  );
};

export default App;
