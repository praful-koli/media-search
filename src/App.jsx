import { Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import Tab from "./components/Tab";
import ResultGrid from "./components/ResultGrid";
import CollectionPage from "./pages/CollectionPage";
import HomePage from "./pages/HomePage";
function App() {
  return (
    <div className=" w-full  min-h-screen bg-gray-800 text-white">
      <Routes>
        <Route
          path="/"
          element={
            <HomePage/>
          }
        />
        <Route path="/collection" element={<CollectionPage />}  />
      </Routes>
    </div>
  );
}

export default App;
