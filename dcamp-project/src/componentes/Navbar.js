import React from 'react';
import './Navbar.css'; // Import CSS file

function Navbar() {
  return (
    <nav className="navbar">
      <ul className="navbar-nav">
        <li className="nav-item">
          <nav to="/главная"><h1>Millenium</h1></nav>
        </li>
        </ul>
      <ul className="navbar-nav">
        <li className="nav-item">
          <nav to="/главная">Главная</nav>
        </li>
        <li className="nav-item">
          <nav to="/цены">Цены</nav>
        </li>
        <li className="nav-item">
          <nav to="/кейсы и отзывы">Кейсы и отзывы</nav>
        </li>
        <li className="nav-item">
          <nav to="/контакты">Контакты</nav>
        </li>
      </ul>
      <div className="right">
        <span>+7(495) 555 65 65</span><br />
        <span>Ежедневно с 09:00 до 18:00</span>
      </div>
      <nav>
        <ul>    
          <li><a href="https://millenium.com">Заказать звонок</a></li>
        </ul>
      </nav>
    </nav>
  );
}

export default Navbar;
