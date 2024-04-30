import React from "react";

const Price = () => {
  return (
    // Main container
    <div className="container relative lg:w-[1160px]  lg:h-[974px] lg:ml-[140px] mt-[174px] mb-[885px] rounded-3xl bg-blue-500 w-[748px] h-[2530px] lg:mt-[132px] lg:mx-[10px]  ">
      {/* Headings with background image */}
      <div className="flexbox text-white ml-5">
        <img
          src="price-bg 1.png"
          alt=""
          className="mt-3"
          style={{ width: "1118px", height: "222px" }}
        />

        <div
          className="absolute w-[682px] h-[132px] -mt-[188px] sm:h-[102px]"
          style={{
            fontFamily: "Montserrat",
            fontSize: "18px",
            fontWeight: 500,
            lineHeight: "21.94px",
            textAlign: "left",
          }}
        >
          Итоговая стоимость разработки интернет-магазина складывается от
          требований заказчика выясненные на этапе обсуждения. При расчёте
          конечной стоимости учитываются сложность дизайна и функционала
          (интеграция с 1С, подключение корпоративного портала и т.д.).
          <br />
          <br />
          <span
            style={{
              fontFamily: "Montserrat",
              fontSize: "18px",
              fontWeight: 700,
              lineHeight: "21.94px",
              textAlign: "left",
            }}
          >
            Стоимость лицензии 1С Битрикс не входит в стоимость.
          </span>
        </div>
      </div>
      {/* Cards container */}
      <div className=" flex flex-wrap justify-center lg:justify-start gap-8 lg:gap-0 lg:mt-0 sm:mt-8">
        {/* First card */}
        <div className="w-[334px] h-[713px] bg-slate-50 ml-11">
          <div
            className="mt-4"
            style={{
              fontFamily: "Montserrat",
              fontSize: "29px",
              fontWeight: 400,
              lineHeight: "56.63px",
              textAlign: "center",
            }}
          >
            <span className="text-gray-400">Тариф</span>
            <br />
            <span>
              <strong>Стандарт</strong>
            </span>
            <br />
            <span>
              от <strong className="text-"> 80 000</strong> ₽
            </span>
          </div>
          <div
            className="mt-[5px] border-t-[20px] border-l-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-l-[#6c49df]"
          ></div>

          <div
            className="relative -mt-10 border-t-[20px] border-r-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-r-[#6c49df]"
          ></div>
          <div class="-mt-5 ml-5 h-px w-auto border-t-2 border-dashed border-blue-500"></div>
          {/* List items */}
          <ol
            className="mt-8 ml-10 :hidden"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "21.63px",
              textAlign: "left",
            }}
          >
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Индивидуальный дизайн</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Верстка Html, CSS, JavaScript, PHP
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">«Посадка» на CMS 1C Битрикс</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Функционал онлайн оплаты товаров
              </span>
            </li>
          </ol>
          <div className="flex mt-3">
            {/* Button */}
            <button className="absolute bg-green-500 mt-[290px] ml-[25px] w-[275px] h-[60px] rounded-lg">
              <span
                className="w-[59px] h-[15px] text-white"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 800,
                  lineHeight: "14.63px",
                  textAlign: "center",
                }}
              >
                Заказать
              </span>
            </button>
          </div>
        </div>
        {/* Second card */}
        <div
          className=" bg-slate-50 ml-11"
          style={{ width: "334px", height: "713px" }}
        >
          <div
            className="mt-4"
            style={{
              fontFamily: "Montserrat",
              fontSize: "29px",
              fontWeight: 400,
              lineHeight: "56.63px",
              textAlign: "center",
            }}
          >
            <span className="text-gray-400">Тариф</span>
            <br />
            <span>
              <strong>Премиум</strong>
            </span>
            <br />
            <span>
              от <strong> 140 000</strong> ₽
            </span>
          </div>
          <div
            className="mt-[5px] border-t-[20px] border-l-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-l-[#6c49df]"
          ></div>

          <div
            className="relative -mt-10 border-t-[20px] border-r-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-r-[#6c49df]"
          ></div>
          <div class="-mt-5 ml-5 h-px w-auto border-t-2 border-dashed border-blue-500"></div>

          <ol
            className="mt-8 ml-10"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "21.63px",
              textAlign: "left",
            }}
          >
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Индивидуальный дизайн</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 overflow-hidden  rounded-full bg-blue-500"></span>
              <span class="truncate ml-3 whitespace-normal">
                Адаптивная верстка Html, CSS, JavaScript, PHP
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">«Посадка» на CMS 1C Битрикс</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Функционал онлайн оплаты товаров
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Личный кабинет</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Расширенные фильтры с поддержкой SEO
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Интеграция с системами служб доставки
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Наполнение товарами</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Обучение пользования сайтом</span>
            </li>
          </ol>
          <div className="flex mt-3">
            <button className="absolute bg-green-500 mt-[165px] ml-[25px] w-[275px] h-[60px] rounded-lg text-center">
              <span
                className="w-[59px] h-[15px] text-white"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 800,
                  lineHeight: "14.63px",
                  textAlign: "center",
                }}
              >
                Заказать
              </span>
            </button>
          </div>
        </div>
        {/* Third card */}
        <div
          className=" bg-slate-50 ml-10"
          style={{ width: "334px", height: "713px" }}
        >
          <div
            className="mt-4"
            style={{
              fontFamily: "Montserrat",
              fontSize: "29px",
              fontWeight: 400,
              lineHeight: "56.63px",
              textAlign: "center",
            }}
          >
            <span className="text-gray-400">Тариф</span>
            <br />
            <span>
              <strong>Престиж</strong>
            </span>
            <br />
            <span>
              от <strong> 180 000</strong> ₽
            </span>
          </div>
          <div
            className="mt-[5px] border-t-[20px] border-l-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-l-[#6c49df]"
          ></div>

          <div
            className="relative -mt-10 border-t-[20px] border-r-[20px] border-b-[20px] 
            border-solid border-t-transparent border-b-transparent border-r-[#6c49df]"
          ></div>
          <div class="-mt-5 ml-5 h-px w-auto border-t-2 border-dashed border-blue-500"></div>

          <ol
            className="mt-8 ml-10"
            style={{
              fontFamily: "Montserrat",
              fontSize: "14px",
              fontWeight: 400,
              lineHeight: "21.63px",
              textAlign: "left",
            }}
          >
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Индивидуальный дизайн</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3 whitespace-normal">
                Адаптивная верстка Html, CSS, JavaScript, PHP
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">«Посадка» на CMS 1C Битрикс</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Функционал онлайн оплаты товаров
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Личный кабинет, Сравнение, Избранное
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Расширенные фильтры с поддержкой SEO
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">
                Интеграция с системами служб доставки
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Наполнение товаром</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Обучение пользования сайтом</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Интеграция с 1С, Мой склад</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3 whitespace-normal">
                Интеграция с маркетплейсами (Яндекс.Маркет, Wildberries, Goods)
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3 whitespace-normal">
                Внедрение политики лояльности, купоны, бонусы
              </span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Интеграция с CRM</span>
            </li>
            <li>
              <span class="inline-block h-2 w-2 rounded-full bg-blue-500"></span>
              <span class="truncate ml-3">Любой не стандартный функционал</span>
            </li>
          </ol>
          <div className="flex mt-3">
            <button className="absolute bg-green-500 mt-[10px] ml-[25px] w-[275px] h-[60px] rounded-lg">
              <span
                className="w-[59px] h-[15px] text-white"
                style={{
                  fontFamily: "Montserrat",
                  fontSize: "12px",
                  fontWeight: 800,
                  lineHeight: "14.63px",
                  textAlign: "center",
                }}
              >
                Заказать
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Price;
