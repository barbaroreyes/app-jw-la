import {Routes , Route} from 'react-router-dom'
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Home from './pages/Home';
import Prendas from './pages/Prendas';
import Cart from './pages/Cart'
import style from 'styled-components';
import CheckOut from './pages/CheckOut';



const Container = style.div`
width:100%

`
function App() {
  return (
    <Container>
       <Header/>
       <Routes>
        <Route path='/'
        element={<Home/>}
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
