import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddBlogs from './Pages/AddBlogs';
import Blogs from './Pages/Blogs';
import HomePage from './Pages/HomePage';
import Footer from './Shared/Footer/Footer';
import Navbar from './Shared/Navbar/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <Routes>
      <Route path='/' element={<HomePage/>}></Route>
      <Route path='/blogs' element={<Blogs/>}></Route>
      <Route path='/add-blog' element={<AddBlogs/>}></Route>
    </Routes>
    <Footer />
    </>
  );
}

export default App;
