import './App.css';
import Navbar from './Components/navbar';
import Cards from './Components/cards';
import Footer from './Components/footer';

function App() {
  return (
    <>
    <div className="App">
    <div className="container">
      <Navbar/>
      <div className='main'>
        <h2>plans</h2>
        <h1>Our Services</h1>
        <p>Lorem ipsum, dolor sit amet consectetur<br/>adipisicing elit.</p>
        <Cards/>
      </div>
      <Footer/>    
    </div>
    </div>
    </>
   
  );
}

export default App;
