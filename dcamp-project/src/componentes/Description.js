import React from 'react';
import './Description.css';
import headerImage from './purple.jpg';

function Description() {
  const imageWidth = 430; 
  const imageHeight = 219;

  return (
    <div className="description">
      <div className="description-left">
      <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h1>Компания <br />Millenium-</h1></a>
        </div>
      <p>
      <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h3>Это дорогая и долгая разработка интернет-магазинов на 1С Битрикс! Нельзя сделать качественный цифровой продукт за дешево и быстро!<br /></h3>
          <h3>Мы создадим интернет-магазин с нуля. Заказчику не придется искать других IT-специалистов для дальнейшей настройки и запуска сайта. Мы настроим сервисы, интегрируем модули для онлайн-торговли, добавим контент и товары. Работы по созданию интернет-магазина с нуля ведутся только после анализа ниши бизнеса.</h3></a>
        </div>
        
        </p>
        <img
        src={headerImage}
        alt="Your website header image"
        className="header-image"
        width={imageWidth}
        height={imageHeight}
      />
      

      </div>
      <div className="description-right">
        {/* Content for the right side */}
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h1>Звоните нам по телефону <br />+7 (495) 792-66-69</h1></a>
        </div>
        <p>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h3>или закажите обратный звонок чтобы получить ответы<br />на все интересующие вас вопросы.</h3></a>
        </div>
         
        </p>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>Введите ваше имя</h2></a>
        </div>
        <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h2>+ 7 (999) 999 99 99</h2></a>
        </div>
        <div>
        <span className="order-bell"><a href="Перезвоните мне">Перезвоните мне</a>
          </span>
      </div>
      <div class="list-group">
          <a href="#" class="list-group-item list-group-item-action active" aria-current="true"><h4>Cогласен/а на обработку персональных данных</h4></a>
        </div>
      </div>
    </div>
  );
}

export default Description;
