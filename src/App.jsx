import { BrowserRouter, Routes, Route } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import Homepage from "./pages/Homepage";
import Movie from "./pages/Movie";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import { LoadingProvider } from "./context/LoadingContext";

function App() {
  return (
    <LoadingProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<DefaultLayout />}>
            <Route index element={<Homepage />} />
            <Route path="/movie/:id" element={<Movie />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/notfound" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LoadingProvider>
  );
}

export default App;
