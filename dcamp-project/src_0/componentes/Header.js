import React from 'react';


function Header() {
  return (
    <header className="header">
      <h1>Разработка итернет-магазинов</h1>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>на 1С-Битрикс</h2></a>
        </div>
        <div class="card">
          <img src="img/header.png" class="card-img-top" alt=""></img>
        </div>
        <p>
            <h3>Разработфуь интернет-магазин за 30 дней с уникальным дизайном и <br /> продуманной структурой который выделит вас на фоне конкурентов</h3>
        </p>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>Узнать стоимость</h2></a>
        </div>
        <p>
          <h3> Оставьте заявку и получите бесплатную консультацию от специалиста, <br /> полный расчет стоимости разработки и бонус:<br /> "15 сервисов которые покажут стратегию продвижения конкурентов, <br /> всё об их выдаче в поиске и не толко"</h3>
        </p>
    </header>
  );
}

export default Header;