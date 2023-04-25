import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase and Auth Context
      </h1>
      <Router>
        <Routes>
          <Route path="/" element={<Signin/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
