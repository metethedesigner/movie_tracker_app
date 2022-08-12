import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Add from "./components/Add";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Watchlist from "./components/Watchlist";
import { GlobalProvider } from "./context/GlobalState";


function App() {
  return (
    <div className="container mx-auto">
  <GlobalProvider>
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Watchlist/>} />
          <Route path="/watched" element={<Watched/>} />
          <Route path="/add" element={<Add/>} />
        </Routes>
      </Router>
  </GlobalProvider>
  </div>
  );
}

export default App;
