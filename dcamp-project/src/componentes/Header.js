import jpg from './header.jpg';
import React from 'react';


function Header() {
  return (
    <header className="header">
      <img src={jpg}  className="Header-jpg" alt="jpg" style={{  position: 'absolute', top: 2, right: 10 }} /> {/* rasm o'ng tomoniga chiqadi */}
      <h2 style={{float: 'left'}}></h2> {/* text chap tomoniga chiqadi */}
      <h1>Разработка итернет-магазинов</h1>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>на 1С-Битрикс</h2></a>
        </div>
        <p>
            <h3>Разработфуь интернет-магазин за 30 дней с уникальным дизайном и <br /> продуманной структурой который выделит вас на фоне конкурентов</h3>
        </p>
        <div class="list-group"><br /><br />
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>Узнать стоимость</h2></a>
        </div>
        <p>
          <h3>Оставьте заявку и получите бесплатную консультацию от </h3> 
          <h3>специалиста, полный расчет стоимости разработки и бонус:</h3>
          <h3>"15 сервисов которые покажут стратегию продвижения </h3>
          <h3>конкурентов, всё об их выдаче в поиске и не толко"</h3>
        </p>
    </header>
  );
}

export default Header;


