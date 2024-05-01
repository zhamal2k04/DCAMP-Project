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
    <div className="w-[1255px] h-[1661px] ml-[112px]">
      <h1 className="mt-2 font-montserrat font-extrabold text-4xl  leading-11 text-left ml-[140px] text-indigo-900">
        Что вы{" "}
        <strong className="text-blue-500 font-extrabold">получаете?</strong>
      </h1>
      <br />

      <div className="flex">
        <img className="ml-[1px] -mt-2" src="./group_22.png" alt="" />
        <div className="text-indigo-900 font-montserrat text-sm font-thin ml-[120px] mt-28">
          <h1 className="font-montserrat text-base font-bold text-left text-blue-600 mb-3">
            Каталог товаров
          </h1>
          <div
            className="text-indigo-900 font-montserrat text-sm font-thin"
            // style={{ lineHeight: "1.2px" }}
          >
            <ul className="list-none">
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                возможность выгружать свои товары в неограниченном количестве
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2 ">
                  &#8226;
                </span>{" "}
                добавлять и редактировать описание товаров
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                сортировать товары по заданным критериям
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                сортировать товары по заданным критериям
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="text-left ml-6">
          <h1 className="font-montserrat text-base font-bold text-left text-blue-600 mb-3">
            {" "}
            Оформление заказа
          </h1>
          <div className="text-indigo-900 font-montserrat text-sm font-thin">
            <ul className="list-none ">
              {/* Remove default list styles */}
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                личный кабинет
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                корзина с отображением выбранных товаров
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                оформление заказа с указанием контактных данных
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                возможность приема онлайн-платежей
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                использование купонов, скидок и специальных предложений
              </li>
            </ul>
          </div>
        </div>
        <img className="ml-[122px] -mt-8" src="./Group_23.png" alt="" />
      </div>

      <div className="flex">
        <img className="ml-[1px] -mt-2" src="./group_24.png" alt="" />
        <div className="text-indigo-900 font-montserrat text-sm font-thin ml-[120px] mt-28">
          <h1 className="font-montserrat text-base font-bold text-left text-blue-600 mb-3">
            {" "}
            Интеграции
          </h1>
          <div className="text-indigo-900 font-montserrat text-sm font-thin">
            <ul className="list-none ">
              {/* Remove default list styles */}
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                1С, Мой склад (выгрузка товаров на сайт, полная синхронизация)
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                Маркетплейсы (Яндекс.Маркет, Wildberries, Goods, Ozon)
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                Интеграция со службами доставки СДЭК, Почта России
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="flex">
        <div className="text-left  ml-6">
          <h1 className="font-montserrat text-base font-bold leading-6 text-left text-blue-600 mb-3 mt-20">
            CRM
          </h1>
          <div className="text-indigo-900 font-montserrat text-sm font-thin">
            <ul className="list-none ">
              {/* Remove default list styles */}
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                фиксация и отслеживание поступивших заявок
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                уведомления о заказах
              </li>
              <li className="flex items-center font-montserrat text-base font-normal leading-[17.07px] text-left">
                <span className="text-indigo-950 inline-block text-4xl mr-2">
                  &#8226;
                </span>{" "}
                отчетность магазина
              </li>
            </ul>
          </div>
        </div>
        <img className="mb-8 ml-64" src="./Group_26.png" alt="" />
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
        className=" w-[275px] h-[60px] bg-blue-600 text-white mt-16 rounded-md hover:bg-indigo-600 bg-opacity-100 ml-12"
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
