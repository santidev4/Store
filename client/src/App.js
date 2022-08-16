import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar';
import Login from "./pages/Login";
import Home from './pages/Home';
import ProductForm from './components/ProductForm';
import PrivateRoute from './components/PrivateRoute';

function App() {

  // TODO Aplicar rutas privadas para los usuarios no logueados
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path='/login' element={ <Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/' element={ <Home />} />
          <Route path='/edit' element={ <ProductForm />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
