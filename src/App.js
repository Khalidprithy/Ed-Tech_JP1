import Header from "./components/Shared/Header";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Shared/Footer";
import Home from "./components/Pages/Home/Home";
import Services from "./components/Pages/Services";
import Blogs from "./components/Pages/Blogs";
import About from "./components/Pages/About";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/services' element={<Services></Services>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
