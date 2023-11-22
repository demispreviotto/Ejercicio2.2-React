import React from 'react'
import "./Home.css"
import ramenBg from '../../assets/Ramen.png'

const Home = (props) => {
    const dishes = props.dishes

    return (<>
        <h1 className='h1-under'>Ram<br />en</h1>
        <img className='ramen-bg' src={ramenBg} alt="ramen" />
        <div className='card-container'>
            {dishes.map(dish => {
                return (
                    <div key={dish.id} className="card">
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p><strong>Price: </strong>{dish.price}$</p>
                    </div>
                )
            })}
        </div>
    </>
    )
}

export default Home