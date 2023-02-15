import Navbar from './Component/navbar/Navbar';
import Header from './Component/header/Header';
 import Movies from './Component/movie/Movies';
  import Footer from './Component/footer/Footer';
 import Notfound from './Component/notfound/Notfound';
import { Route,Routes} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<Header/>}></Route>
        <Route path='/movie' element={<Movies/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
      <Footer/>
     
    </div>
  );
}

export default App;
