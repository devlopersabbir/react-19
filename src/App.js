import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./App.css";

const Menu = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="/about">about</Link>
      <Link to="/contact">contact</Link>
    </>
  );
};

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <Routes>
        <Route path="/" element={<h1>Home page</h1>} />
        <Route path="about" element={<h1>about page</h1>} />
        <Route path="contact" element={<h1>contact page</h1>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
