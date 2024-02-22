import React, {useState} from 'react';

import apiWeather from '../../../../api/getWeather';

function Item1() {
	function api() {
		apiWeather.get(`${inputValue}`).then((response) => {
			console.log(response);
		});
	}
	
	const [inputValue, setInputValue] = useState('');
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			e.preventDefault();
			api();
			setInputValue('');
		}
	};
	const handleChange = (e) => {
		setInputValue(e.target.value);
	};

	return (
	 <div className="bg-white dark:bg-slate-900 flex items-center justify-center flex-wrap mx-auto py-60">
		 <div className="container">
			 <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
				 <div className="flex flex-col items-center">
					 <h1
					  className="text-slate-900 dark:text-white font-extrabold text-5xl tracking-tight text-center relative z-10">
						 Digite seu endereço:
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
			 </div>
		 </div>
	 </div>
	);
}

export default Item1;
