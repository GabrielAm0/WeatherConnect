import React from 'react';

function Footer() {
	return (
	 <footer className="bg-gray-100 shadow-top py-3">
		 <div className="container mx-auto text-center">
			 <p className="text-slate-600 text-sm">
				 © 2023 Weather Connect. Todos os direitos reservados.
			 </p>
			 <div className="mt-3 flex items-center justify-center">
				 <a href="#" className="text-slate-600 hover:text-slate-900 px-3">
					 Termos de Serviço
				 </a>
				 <span className="text-slate-600">|</span>
				 <a href="#" className="text-slate-600 hover:text-slate-900 px-3">
					 Política de Privacidade
				 </a>
			 </div>
		 </div>
	 </footer>
	);
}

export default Footer;
