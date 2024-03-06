import React, { useState } from "react";
import apiWeather from "../../../../api/getWeather";
import Modal from "react-modal";
import { WiDaySunny } from "react-icons/wi";
import InputMask from 'react-input-mask';

function Item1() {
	const [inputValue, setInputValue] = useState("");
	const [loading, setLoading] = useState(false);

	const [modalIsOpen, setModalIsOpen] = useState(false);
	const [modalData, setModalData] = useState("");

	const [reponseStatus, setreponseStatus] = useState("");

	let response = 0;
	async function api() {
		try {
			setLoading(true);
			response = await apiWeather.get(`${inputValue}`);
			setModalData(response.data);
			setModalIsOpen(true);
		} catch (error) {
			let erro = error.toJSON()
			let statusCode = erro.status
			setreponseStatus(statusCode)
			setModalIsOpen(true);
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
		setreponseStatus("");
		setModalData("");
	};

	const renderModalContent = () => {
		if (reponseStatus === 500) {
			return (
				<>
					<div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div className="flex bg-white dark:bg-slate-800 p-3 border-b border-solid border-gray-300 dark:border-slate-500 rounded-t-lg justify-center">
							<h3 className=" text-red-500 dark:text-red-400 text-2xl font-semibold ">
								ERRO
							</h3>
						</div>
					</div>
					<div className="bg-white dark:bg-slate-800 p-6 flex flex-col justify-center items-center rounded-b-md">
						<p className="text-lg font-bold  text-red-500 dark:text-red-400 text-center cel:text-sm">
							Ocorreu um erro ao tentar buscar pelo CEP digitado
						</p>
						<div className="pt-3">
							<button
								onClick={closeModal}
								className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300"
							>
								Fechar
							</button>
						</div>
					</div>
				</>
			);
		}
		else {
			return (
				<>
					<div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						<div
							className="flex bg-white dark:bg-slate-800 p-5 border-b border-solid border-gray-300 dark:border-slate-500 rounded-t-lg justify-center">
							<h3 className="text-slate-900 dark:text-white text-3xl font-semibold">
								{modalData.descricao && modalData.descricao.charAt(0).toUpperCase() + modalData.descricao.slice(1)}
							</h3>
						</div>
					</div>
					<div>
						<div className="bg-white dark:bg-slate-800 p-6 flex flex-col justify-center items-center rounded-b-md">
							<div className="flex flex-row">
								<div className="flex flex-col items-center justify-center pr-2">
									<WiDaySunny size={142} className=" dark:text-slate-200" />
								</div>
								<div className="flex flex-col justify-center">
									<p className="mb-2 pr-1">
										<span
											className="text-md font-semibold text-slate-900 dark:text-white">Temperatura atual:</span>{" "}
										<span
											className="text-lg font-bold text-slate-900 dark:text-white">{modalData.temperatura}</span>
										<span className="text-sm font-bold text-slate-900 dark:text-white">°C</span>
									</p>
									<p className="mb-2">
										<span
											className="text-md font-semibold text-slate-900 dark:text-white">Sensação Térmica:</span>{" "}
										<span
											className="text-lg font-bold text-slate-900 dark:text-white">{modalData.sensacao_termica}</span>
										<span className="text-sm font-bold text-slate-900 dark:text-white">°C</span>
									</p>
									<p className="mb-2">
										<span
											className="text-md font-semibold text-slate-900 dark:text-white">Temperatura minima:</span>{" "}
										<span
											className="text-lg font-bold text-slate-900 dark:text-white">{modalData.temperatura_minima}</span>
										<span className="text-sm font-bold text-slate-900 dark:text-white">°C</span>
									</p>
									<p className="mb-2">
										<span
											className="text-md font-semibold text-slate-900 dark:text-white">Temperatura máxima:</span>{" "}
										<span
											className="text-lg font-bold text-slate-900 dark:text-white">{modalData.temperatura_maxima}</span>
										<span className="text-sm font-bold text-slate-900 dark:text-white">°C</span>
									</p>
								</div>
							</div>
							<div className="pt-3">
								<button
									onClick={closeModal}
									className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-600 focus:outline-none focus:ring focus:border-blue-300">
									Fechar
								</button>
							</div>
						</div>
					</div>
				</>
			);
		}
	};

	return (
		<div className="bg-white dark:bg-slate-900 flex items-center justify-center flex-wrap mx-auto py-60">
			<div className="container">
				<div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
					<div className="flex flex-col items-center">
						<h1
							className="text-slate-900 dark:text-white font-extrabold text-5xl tracking-tight text-center relative z-10">
							Digite seu CEP:
						</h1>
						<div className="line-gradient3 relative z-0"></div>
					</div>

					<div className="mt-8 flex items-center justify-center">
						<form className="flex items-center justify-center w-9/12 input-container">
							<InputMask
								mask="99999-999"
								maskPlaceholder={null}
								className="bg-gray-200 ring-gray-50 focus:ring-gray-500 focus:bg-gray-300 dark:bg-gray-700 px-6 py-4 w-9/12 rounded-md focus:ring-2 focus:outline-none dark:focus:outline-offset-2 dark:focus:ring-slate-500 dark:focus:bg-slate-600 dark:text-white"
								onKeyDown={handleKeyDown}
								onChange={handleChange}
								value={inputValue}
							/>
						</form>
					</div>

					{loading && (
						<div
							className="fixed top-0 left-0 right-0 bottom-0 flex items-center justify-center bg-black bg-opacity-50">
							<div
								className="animate-spin rounded-full h-16 w-16 border-t-2 border-gay-500 border-r-2 border-b-2 border-gray-700"></div>
						</div>
					)}
				</div>

				<Modal
					isOpen={modalIsOpen}
					onRequestClose={closeModal}
					contentLabel="Example Modal"
					className="modal-content"
					overlayClassName="modal-overlay"
					shouldCloseOnOverlayClick={true}
				>
					<div
						className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
						<div className="relative w-auto my-6 mx-auto max-w-3xl">

							{renderModalContent()}

						</div>
					</div>
					<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
				</Modal>

			</div>
		</div>
	);
}

export default Item1;
