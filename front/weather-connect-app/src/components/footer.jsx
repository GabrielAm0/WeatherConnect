import React from 'react';

function Footer() {
	return (
	 <footer className="bg-gray-100 dark:bg-slate-700 shadow-top py-3">
		 <div className="container mx-auto text-center">
			 <p className="text-slate-600 dark:text-white text-sm">
				 © 2023 Weather Connect. Todos os direitos reservados.
			 </p>
			 <div className="mt-3 flex items-center dark:text-white justify-center">
				 <a href="#" className="text-slate-600 hover:text-slate-900 px-3 dark:text-white">
					 Termos de Serviço
				 </a>
				 <span className="text-slate-600 dark:text-white">|</span>
				 <a href="#" className="text-slate-600 hover:text-slate-900 px-3 dark:text-white">
					 Política de Privacidade
				 </a>
			 </div>
		 </div>
	 </footer>
	);
}

export default Footer;
