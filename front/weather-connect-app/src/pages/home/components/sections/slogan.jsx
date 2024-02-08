import React from 'react'

function Slogan() {
	return (
	 <section className="py-10 cel:pb-1">
		 <div className="flex items-center justify-center flex-wrap mx-auto">
			 <div className="container">
				 <div className="relative max-w-5xl mx-auto pt-20 sm:pt-24 lg:pt-32">
					 <div className="flex flex-col items-center">
						 <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center relative z-10">
							 Conectando você ao clima global
						 </h1>
						 <div className="line-gradient1"></div>
					 </div>
					 <div className="flex flex-col items-center">
						 <h1 className="text-slate-900 font-extrabold text-4xl sm:text-5xl lg:text-6xl tracking-tight text-center relative z-10">
							 com precisão e eficiência
						 </h1>
						 <div className="line-gradient relative z-0"></div>
					 </div>
					 <p className="mt-6 cel:mt-20 text-lg text-slate-600 text-center max-w-3xl mx-auto">
						 Transformando dados em informações precisas, a Weather Connect traz eficiência e
						 acessibilidade para consultar informações climáticas globais.
					 </p>
				 </div>
			 </div>
		 </div>
	 </section>	
	)
}

export default Slogan;