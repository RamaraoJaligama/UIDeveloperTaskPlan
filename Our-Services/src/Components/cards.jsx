import React from 'react'
import img from './images/Vector (1).png'
import Button from './button'

function Cards({ cardData }) {    
    return (
        <div className='cards'>
            {console.log(cardData)}{
                cardData.map(card => <div className='card'>
                    <span className="head">{card.heading}</span>
                    <h2>${card.headingPrice}<span className="small">/month</span></h2>
                    <h6>{card.descrption}</h6>
                    <ul>
                        {
                            card.listItems.map(item => {
                                return (<li>
                                    <img src={img} className='tick' alt="img" />
                                    <p>{item}</p>
                                </li>)
                            })
                        }
                    </ul>
                    <Button />
                </div>)
            }
        </div>
    )
}

export default Cards


