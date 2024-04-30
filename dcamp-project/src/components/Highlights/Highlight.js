import React, { useState } from "react";

const Highlight = () => {
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
    <div className="w-[1255px] h-[1661px]">
      <h1>Что вы получаете?</h1>
      <br />
      <div className="flex">
        <img src="./group_22.png" alt="" />
        <div className="text-left">
          <h1 className="text-center mt-6"> Каталог товаров</h1>
          <li>возможность выгружать свои товары в неограниченном количестве</li>
          <li>добавлять и редактировать описание товаров</li>
          <li>сортировать товары по заданным критериям</li>
          <li>сортировать товары по заданным критериям</li>
        </div>
      </div>
      <div className="flex">
        <div className="text-left ml-6">
          <h1 className="text-center mt-6"> Оформление заказа</h1>
          <li>личный кабинет</li>
          <li>корзина с отображением выбранных товаров</li>
          <li>оформление заказа с указанием контактных данных</li>
          <li>возможность приема онлайн-платежей</li>
          <li>использование купонов, скидок и специальных предложений</li>
        </div>
        <img src="./Group_23.png" alt="" />
      </div>
      <div className="flex">
        <img src="./group_24.png" alt="" />
        <div className="text-left">
          <h1 className="text-center mt-6"> Интеграции</h1>
          <li>
            1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)
          </li>
          <li>Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)</li>
          <li>Интеграция со службами доставки СДЭК, Почта России</li>
        </div>
      </div>
      <div className="flex">
        <div className="text-left  ml-5">
          <h1 className="text-center ">CRM</h1>
          <li>фиксация и отслеживание поступивших заявок</li>
          <li>уведомления о заказах</li>
          <li>отчетность магазина</li>
        </div>
        <img className="mb-8" src="./Group_26.png" alt="" />
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
        className="w-[275px] h-[60px] bg-blue-600 text-white mt-2 rounded-md hover:bg-indigo-600 bg-opacity-100"
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

export default Highlight;
