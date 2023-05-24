import './App.css';
import Navbar from './navbar';
import Footer from './footer';
import Form from './form';


function App() {
  return (
    <div className="App" >
      <header>
      <div className="container">
      <Navbar/>
      <div className='main'>
        <h1>Contact Us</h1>
        <p>Lorem ipsum, dolor sit amet consectetur<br/>adipisicing elit.</p>
      </div> 
      <Form/>
      <Footer/> 
    </div>
      </header>
    </div>
  );
}

export default App;
