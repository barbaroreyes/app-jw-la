import {Routes , Route} from 'react-router-dom'
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Categorias from './pages/Categorias';
import Prendas from './pages/Prendas';
import Cart from './pages/Cart'
import style from 'styled-components';
import CheckOut from './pages/CheckOut';
import Home from './pages/Home';



const Container = style.div`


`
function App() {
  return (
    <Container>
       <Header/>
       <Routes>
       <Route path='/'
        element={<Home/>}
        />
        <Route path='/categorias'
        element={<Categorias/>}
        />
         <Route path='/prendas'
        element={<Prendas/>}
        />
         <Route path='/cart'
        element={<Cart/>}
        />
          <Route path='/checkout'
        element={<CheckOut/>}
        />
      </Routes>
       <Footer/>
    </Container>
  );
}

export default App;
