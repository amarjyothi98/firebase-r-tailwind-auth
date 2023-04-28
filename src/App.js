import "./index.css"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signin from "./components/Signin";
import Signup from "./components/Signup"
import Account from "./components/Account"
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  return (
    <div>
      <h1 className="text-center text-3xl font-bold">
        Firebase and Auth Context
      </h1>
        <Router>
      <AuthContextProvider>
          <Routes>
            <Route path="/" element={<Signin/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/account" element={<Account/>}/>
          </Routes>
      </AuthContextProvider>
        </Router>
    </div>
  );
}

export default App;
