import React from 'react'

import telegramIcon from '../img/Telegram.png'
import whatsappIcon from '../img/Whatsapp.png'
import '../css/menu.css'

const Menu = props => {
  return (
    <nav className="menu" id="menu">
      <ul className='product-types'>
        <li><a href='http://#' alt="">Jersey</a></li>
        <li><a href='http://#' alt="">Shoes</a></li>
        <li><a href='http://#' alt="">equipment</a></li>
        <li><a href='http://#' alt="">Sales</a></li>
        <li><a href='http://#' alt="">News</a></li>
        <li><a href='http://#' alt="">Blog</a></li>
      </ul>
      <ul className="menu-footer">
        <li><a href='http://#'>About us</a></li>
        <li><a href='http://#'>Payment and delivery</a></li>
        <li><a href='http://#'>Contact Us</a></li>
      </ul>
      <ul className="menu-social">
        <li className="tm"><a href='http://#'><img src={telegramIcon} alt="Telegram"></img></a></li>
        <li className="wp"><a href='http://#'><img src={whatsappIcon} alt="Whatsapp"></img></a></li>
      </ul>
    </nav>
  )
}

export default Menu