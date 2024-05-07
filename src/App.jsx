import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/pages/Layout";
import Home from "./components/pages/Home";
import Moviees from "./components/pages/moviess";
import Explore from "./components/pages/Explore";
import Genre from "./components/pages/Genre";
import News from "./components/pages/News";
import Movies from "./components/pages/Movies";
import TVShows from "./components/pages/TVShows";

function App() {
 
  return (
    <BrowserRouter>
      <Routes>
      
      <Route path="/" element={<Layout />}>
      <Route path="/Layout/Home" element={<Home />} />
          <Route path="/Layout/Explore" element={<Explore />} />
          <Route path="/Layout/moviess" element={<Moviees />} />
          <Route path="/Layout/Genre" element={<Genre />} />
          <Route path="/Layout/News" element={<News />} />
          <Route path="/Layout/Movies" element={<Movies />} />
          <Route path="/Layout/TVShows" element={<TVShows />} />
          </Route>
      </Routes>
      </BrowserRouter>
  )
}

export default App
