import React, { useState } from "react";
import apiWeather from "../../../../api/getWeather";
import Modal from "react-modal";
import { IoClose } from "react-icons/io5";

function Item1() {
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalData, setModalData] = useState("");

  let response = 0;
  async function api() {
    try {
      setLoading(true);
      response = await apiWeather.get(`${inputValue}`);
      setModalData(response.data);
      setModalIsOpen(true);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  const handleKeyDown = async (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      await api();
      setInputValue("");
    }
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const closeModal = () => {
    setModalIsOpen(false);
    setModalData("");
  };

  return (
    <div className="bg-white dark:bg-slate-900 flex items-center justify-center flex-wrap mx-auto py-60">
      <div className="container">
        <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
          <div className="flex flex-col items-center">
            <h1 className="text-slate-900 dark:text-white font-extrabold text-5xl tracking-tight text-center relative z-10">
              Digite seu CEP:
            </h1>
            <div className="line-gradient3 relative z-0"></div>
          </div>

          <div className="mt-8 flex items-center justify-center">
            <form className="flex items-center justify-center w-9/12 input-container">
              <input
                className="bg-gray-200 focus:ring-gray-500 focus:bg-gray-300 dark:bg-gray-700 px-6 py-4 w-9/12 rounded-md focus:ring-2 focus:outline-none dark:focus:outline-offset-2 dark:focus:ring-slate-500 dark:focus:bg-slate-600 dark:text-white"
                onKeyDown={handleKeyDown}
                onChange={handleChange}
                value={inputValue}
              />
            </form>
          </div>

          {loading && (
            <div className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
              <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-blue-500 border-r-2 border-b-2 border-gray-700"></div>
            </div>
          )}
        </div>

        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
          className="modal-content"
          overlayClassName="modal-overlay"
        >
          <div className=" justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div className="bg-white dark:bg-slate-800 flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                  <h3 className="text-slate-900 dark:text-white text-3xl font-semibold">Modal Title</h3>
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-3 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    <IoClose />
                  </button>
                </div>
                <div className="bg-white dark:bg-slate-800 w-auto p-6 flex-auto">
                  <p className="mb-2">
                    <span className="font-bold">Temperatura:</span>{" "}
                    {modalData.temperatura}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Sensação Térmica:</span>{" "}
                    {modalData.sensacao_termica}
                  </p>
                  <p className="mb-2">
                    <span className="font-bold">Temperatuda minima:</span>{" "}
                    {modalData.temperatura_minima}
                  </p>
                </div>
                <div className="flex items-center justify-end p-2 border-t border-solid border-blueGray-200 rounded-b">
                  <button
                    onClick={closeModal}
                    className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-300"
                  >
                    Fechar Modal
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black" onClick={closeModal}></div>
        </Modal>
      </div>
    </div>
  );
}

export default Item1;
