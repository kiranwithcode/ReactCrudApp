import './App.css';
import About from './components/pages/About';
import Contact from './components/pages/Contact';
import Home from './components/pages/Home';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/layout/Header';
import NotFound from './components/pages/NotFound';
import AddUser from './components/users/AddUser';
import EditUser from './components/users/EditUser';
import 'react-toastify/dist/ReactToastify.css'
import { ToastContainer } from 'react-toastify';
import View from './components/users/View';



function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <ToastContainer position='top-center'></ToastContainer>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/users/add' element={<AddUser />} />
          <Route path='/users/edit/:id' element={<EditUser />} />
          <Route path='/users/view/:id' element={<View />} />
          <Route element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
