import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <div className="logo">Millenium</div>
      <nav>
        <ul>
          <li><a href="/">Главная</a></li>
        </ul>  
      </nav>
      <nav>
        <ul>    
          <li><a href="/Цены">Цены</a></li>
        </ul>
      </nav>
      <nav>
        <ul>    
          <li><a href="/Кейсы и отзывы">Кейсы и отзывы</a></li>
        </ul>
      </nav>
      <nav>
        <ul>    
          <li><a href="/Контакты">Контакты</a></li>
        </ul>
      </nav>
      <div className="right">
            <span>+7(495) 555 65 65</span><br />
            <span>Ежедневно с 09:00 до 18:00</span>
            <nav>
        <ul>    
          <li><a href="https://millenium.com">Заказать звонок</a></li>
        </ul>
      </nav>
            
          </div>
      
    </header>
  );
}

export default Header;
