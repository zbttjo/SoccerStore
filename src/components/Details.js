import React from 'react';
import { Link } from "react-router-dom";

import '../css/details.css';

const Details = props => {
  
    console.log(props);
  
  return (
    <div className='details'>
      <div className='details-slider'>
        <img className='product-full-image' src='../img/1.jpg' alt="" />
        
      </div>

      <div className='description'>
        <p className='details-category'>Jersey /</p>
        <h2 className="details-product-title">USMNT 21/22 AWAY<br />JERSEY BY NIKE</h2>
        <div className='details-price'>
          <span className="product-price">89.99</span>
          <span className="product-discounted-price">49.99</span>
        </div>
        <div className='product-description'>
          <p>Nike has taken an icon – the stars and stripes – and reconstructed it into something new. Blue and red stripes fold over each other to create star shapes that are then distorted and broken to create the pattern you see on their latest away jersey for the USMNT and USWNT. Kitted out in stars made of stripes – that’s how you reimagine an icon. That’s how you reimagine the USA away jersey.</p>
        </div>
        <div className='product-materials'>
          <p className='product-material'><strong>Material:</strong> 100 % Polyester</p>
          <p className='product-consist'><strong>Type of Team Badge:</strong> Embroidered</p>
        </div>

        <form className='sizes'>
          <ul className='size-list'>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">XS</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">S</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">M</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">L</span>
              </label>
            </li>
            <li className="size-item">
              <label className="size-label">
                <input type="checkbox" className="size-input"/>
                <span className="label-text">XL</span>
              </label>
            </li>
          </ul>
          <Link className="dimensions-link" to='/dimensions'>
            Size table
          </Link>
          <button className="add-to-cart btn">Add to Cart</button>
        </form>
      </div>

    </div>
  )
}

export default Details