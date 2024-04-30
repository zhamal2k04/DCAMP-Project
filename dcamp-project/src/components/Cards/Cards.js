import React, { useState } from "react";

const Cards = () => {
  // State to control the visibility of the modal
  const [modalOpen, setModalOpen] = useState(false);

  // Function to handle opening the modal
  const openModal = () => {
    setModalOpen(true);
  };

  // Function to handle closing the modal
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="w-[1160px] ml-[140px]">
      {/* Heading */}
      <h1 className="text-center py-8 text-4xl font-bold">
        Мы создаём интернет-магазины,{" "}
        <strong className="text-blue-500">которые продают</strong>
      </h1>
      {/* Cards */}
      <div className="flex flex-wrap justify-center gap-1 drop-shadow-md">
        {/* First Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              01
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              Удобный интерфейс
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Блоковая подача информации, удобные кнопки, карточки товаров,
              понятное меню и легкая навигация по многостраничному сайту.
            </span>
          </div>
        </div>
        {/* Second Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              02
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              Продающая структура
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Делаем анализ вашей целевой аудитории и вашего предложения.
              Опираясь на анализ прописываем продающуюу структуру сайта.
            </span>
          </div>
        </div>
        {/* Third Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              03
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              Адаптивность
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Сайт корректно отображается на различных устройствах, элементы
              динамически подстраиваются под различные разрешения экрана, что
              повышает конверсию сайта в покупку.
            </span>
          </div>
        </div>
        {/* Fourth Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              04
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              Уникальный дизайн
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Не пользуемся шаблонными решениями. Под каждый проект
              разрабатывается индивидуальный дизайн который подчеркнет имидж
              компании
            </span>
          </div>
        </div>
        {/* Fifth Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              05
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              Защита и безопасность
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Подключаем HTPS протокол, защищаем от DDOS атак, чтобы данные
              клиентов были в безопасности.
            </span>
          </div>
        </div>
        {/* Sixth Card */}
        <div
          className="card"
          style={{ filter: "drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.25))" }}
        >
          <div
            className="w-[373px] h-[200px] mb-4 shadow-lg rounded-xl hover:bg-red-500  hover:text-white"
            style={{
              cursor: "url(cursor.png), auto",
            }}
          >
            <span className="flex font-Montserrat text-4xl text-white font-bold leading-96 text-left ml-2 font-size p-3">
              06
            </span>
            <span className="flex ml-2 font-montserrat text-base font-bold leading-17 text-left py-1">
              SEO оптимизация
            </span>
            <hr className="border-2 border-solid border-custom-color border-red-500 w-52 ml-2 hover:white" />
            <span className="flex ml-2 font-montserrat text-xs leading-tight text-left py-2">
              Сайты соответствуют требованиям поисковой оптимизации, они без
              труда покоряют топы поисковой выдачи Яндекс и Google.
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      {modalOpen && (
        <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg">
            <h2 className="text-gray-800 text-center text-2xl font-bold mb-4">
              Модальное окно
            </h2>
            {/* Add your modal content here */}
            <button
              className="block mx-auto bg-blue-600 text-white px-4 py-2 rounded-md"
              onClick={closeModal}
            >
              Закрыть
            </button>
          </div>
        </div>
      )}

      {/* Button to open the modal */}
      <button
        className="w-[275px] h-[60px] bg-blue-600 text-white mt-2 rounded-md"
        onClick={openModal}
        style={{
          cursor: "url(cursor.png), auto",
        }}
      >
        <span>Узнать стоимость</span>
      </button>
    </div>
  );
};

export default Cards;
