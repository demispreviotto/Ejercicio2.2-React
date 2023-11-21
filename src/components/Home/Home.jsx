import React from 'react'
import "./Home.css"

const Home = (props) => {
    const dishes = props.dishes

    return (
        <div className='card-container'>
            {/* <h1>Home</h1> */}
            {dishes.map(dish => {
                return (
                    <div key={dish._id} className="card">
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                        <p><strong>Price: </strong>{dish.price}$</p>
                    </div>
                )
            })}
        </div>
    )
}

export default Home