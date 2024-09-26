import { Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Dashboard from "./pages/dashboard/Dashboard";
import Signup from "./pages/signup/Signup";

function App() {
  return (
    <div className="App">
     <Header/>
      <Routes>
        <Route path="/" element={<Signup/>}/>
        <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      
    </div>
  )
}


export default App;
