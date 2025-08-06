import Topbar from "./components/Topbar/Topbar";
import Homepage from "./pages/Homepage/Homepage";
import Login from "./pages/Login/Login";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Register from "./pages/Register/Register";
import Settings from "./pages/Settings/Settings";
import Single from "./pages/Single/Single";
import Write from "./pages/Write/Write";
import Posts from "./components/Posts/Posts";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";




function App() {
  const currentUser = true;
  return (
    <Router>
  <Topbar />
  <Routes>
    <Route exact path="/" element={<Homepage />} />
   <Route path="/posts" element={<Posts  />} />
    <Route path="/register" element={currentUser ? <Homepage /> : <Register />} />
    <Route path="/login" element={currentUser ? <Homepage /> : <Login />} />
    
    <Route path="/post/:postId" element={<Single />} />

    <Route path="/write" element={currentUser ? <Write /> : <Login />} />
    <Route path="/settings" element={currentUser ? <Settings /> : <Login />} />
    <Route exact path="/about" element={<About/>}/>
    <Route exact path="/contact" element={<Contact/>}/>
  </Routes>
</Router>

  );
}

export default App;