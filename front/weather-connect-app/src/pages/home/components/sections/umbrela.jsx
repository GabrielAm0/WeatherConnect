import React from 'react'
import Umbrela from '../../../../assets/img/home/umbrela.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'


function UmbrelaCompo() {

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.guarda-chuva', {
			x: -700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '100px',
				end: '550px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])


	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.texto-guarda-chuva', {
			x: 700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '100px',
				end: '550px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.texto-guarda-chuva')
		}

	}, [])

	return (
	 <section className="flex items-center justify-center flex-wrap mx-auto py-20">
		 <div className="container">
			 <div className="flex flex-col items-center justify-center" id="sec-trig">
				 <div className="flex gap-28 flex-row media-fd items-center justify-center">
					 <img src={Umbrela} className="guarda-chuva ml-20 cel:ml-0 object-contain img-size"></img>
					 <div className={'flex flex-col texto-guarda-chuva'}>
						 <h1 className="text-slate-900 font-bold text-4xl tracking-tight text-center relative z-10">
							 Com base nos dados de sua localização exata, a
						 </h1>

						 <div className="flex flex-col">
							 <div className="flex flex-row ">
								 <h1 className="margin-r-9 text-gradient text-4xl font-bold tracking-tighter">Weather
									 Connect</h1>
								 <h1
								  className="text-slate-900 font-bold text-4xl tracking-tight text-center relative z-10">
									 traz as informações e previsões
								 </h1>
							 </div>
							 <h1
							  className="text-slate-900 font-bold text-4xl tracking-tight text-center relative z-10">
								 climáticas do local em que você está.
							 </h1>
						 </div>
					 </div>
				 </div>

			 </div>
		 </div>
	 </section>
	)
}

export default UmbrelaCompo;
