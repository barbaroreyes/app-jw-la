import {Routes , Route} from 'react-router-dom'
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Home from './pages/Home';
import Prendas from './pages/Prendas';
import style from 'styled-components';



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
      </Routes>
       <Footer/>
    </Container>
  );
}

export default App;
