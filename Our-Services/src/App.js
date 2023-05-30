import './App.css';
import Navbar from './Components/navbar';
import Cards from './Components/cards';
import Footer from './Components/footer';
import { useState } from 'react';

function App() {
  const [cardData, setCardData] = useState([{
    card: 1,
    headingPrice: 100,
    heading: "Basic",
    descrption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    listItems:["Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit"]
  },
  {
    card: 2,
    headingPrice: 250,
    heading: "Plus",
    descrption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam",
    listItems:["Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit"]
  },
  {
    card: 3,
    headingPrice: 400,
    heading: "Pro",
    descrption:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit nemo hic quos, ab, dolor aperiam ",
    listItems:["Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit","Lorem ipsum, dolor sit"]
  }
])
  return (
      <div className="App">
        <div className="container">
          <Navbar />
          <div className='main'>
            <h2>plans</h2>
            <h1>Our Services</h1>
            <p>Lorem ipsum, dolor sit amet consectetur<br />adipisicing elit.</p>
            <Cards cardData={cardData} />
          </div>
          <Footer />
        </div>
      </div>
  );
}

export default App;
