import {Routes , Route} from 'react-router-dom'
import './App.css';
import Footer from './compo/Footer';
import Header from './compo/Header';
import Home from './pages/Home';
import style from 'styled-components';
import {mobilex,mobile,table ,all} from './compo/Responsive';


const Container = style.div`
width:100%

// ${mobilex({width:'87%'})}
`
function App() {
  return (
    <div>
       <Header/>
       <Routes>
        <Route path='/'
        element={<Home/>}
        />
      </Routes>
       <Footer/>
    </div>
  );
}

export default App;
