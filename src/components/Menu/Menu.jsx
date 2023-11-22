import React from 'react'
import './Menu.css'
import ramenBg from '../../assets/Ramen.png'


const Menu = (props) => {
    const menuItems = props.menuItems;
    const timestamp = new Date().getUTCMilliseconds();

    return (
        <>
            <h1 className='h1-under'>Me<br />nu</h1>
            <div className="">
                {menuItems.map((menuItem) => {
                    return (
                        <div className='menu' key={timestamp}>
                            <h2>{menuItem.category}</h2>
                            {menuItem.items.map((item, index) => (
                                <>
                                    <div key={index} className='card'>
                                        <h3>{item.name}</h3>
                                        <p>{item.description}</p>
                                    </div>
                                    <div className="img-container">
                                        <img src={ramenBg} alt="dish" />
                                    </div>
                                </>
                            ))}
                        </div>
                    );
                })}
            </div>
        </>
    );
};

export default Menu