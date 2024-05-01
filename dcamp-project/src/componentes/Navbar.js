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
      <li className="nav-item">
        <nav to="">
          <span>+7(495) 555 65 65</span><br />
          <span>Ежедневно с 09:00 до 18:00</span>
        </nav>
      </li>
      <div>
        <span className="order-bell"><a href="https://millenium.com">Заказать звонок</a>
          </span>
      </div>
    </nav>
  );
}

export default Navbar;
