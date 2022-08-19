import Header from "./components/Shared/Header";
import { Route, Routes } from 'react-router-dom';
import Footer from "./components/Shared/Footer";
import Home from "./components/Pages/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
