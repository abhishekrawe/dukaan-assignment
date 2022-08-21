import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/layouts/Navbar';
import Footer from './components/layouts/Footer';
import Slogan from './components/Slogan/Slogan';
import Product from './components/layouts/Product';


function App() {
  return (
    <div>

    {/* navbar   */}
      <Navbar/>
      
    {/* slogan maker */}
      <Slogan/>

    {/* main content */}  
      <Product/>
    
    {/* footer    */}
      <Footer/>
    </div>
  );
}

export default App;
