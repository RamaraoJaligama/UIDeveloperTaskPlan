import React from 'react'
import img from './Vector (1).png'

function Cards() {
  return (
      <div className='cards'>
        <div className='card'>
        <span className="head">Basic</span>
        <h2>$100<span className ="small">/month</span></h2>
        <h6>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit.
                    Suscipit<br/> nemo hic quos, ab, dolor </h6>
                    <ul>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>                   
                </ul>
                <button className='btn'>Learn More</button>
        </div>
        <div  className='card'>
        <span className="head">Plus</span>
        <h2>$250<span className="small">/month</span></h2>
        <h6>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit.
                    Suscipit<br/> nemo hic quos, ab, dolor </h6>
                    <ul>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img} className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>                    
                </ul>
                <button className='btn'>Learn More</button>
        </div>
        <div className='card'>
        <span className="head">Pro</span>
        <h2>$400<span className="small">/month</span></h2>
        <h6>Lorem ipsum, dolor sit amet<br/> consectetur adipisicing elit.
                    Suscipit<br/> nemo hic quos, ab, dolor </h6>
                    <ul>
                    <li>
                        <img src={img}className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img}className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>  
                    <li>
                        <img src={img}className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img}className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>
                    <li>
                        <img src={img}className='tick' alt="img"/>
                        <p>Lorem ipsum, dolor sit</p>
                    </li>                    
                </ul>
                <button className='btn'>Learn More</button>
        </div>
      </div>
  )
}

export default Cards


