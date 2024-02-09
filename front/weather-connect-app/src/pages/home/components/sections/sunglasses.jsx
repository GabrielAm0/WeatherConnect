import React from 'react'
import Oculos from '../../../../assets/img/home/oculos.png'
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'


function Sunglasses() {


	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.texto-oculos', {
			x: -700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#div-sec-oculos',
				start: '-460px',
				end: '550px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.texto-oculos')
		}

	}, [])
	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('.oculos', {
			x: 700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#div-sec-oculos',
				start: '-460px',
				end: '550px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.oculos')
		}

	}, [])
	

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('#div-master-oculos', {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				// markers: true,
				trigger: '#div-master-cards',
				start: '0px',
				end: '200px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])

	return (
	 <section className="bg-white dark:bg-slate-800 flex items-center justify-center flex-wrap mx-auto pb-10">
		 <div id="div-master-oculos" className="container">
			 <div id="div-sec-oculos" className="flex flex-col items-center justify-center">
				 <div className="flex gap-28 flex-row media-fd items-center justify-center">
					 <div className={'flex flex-col texto-oculos'}>
						 <h1 className="text-slate-900 dark:text-white font-bold text-4xl tracking-tight text-center relative z-10">
							 Nós te mantemos informado sobre o clima
						 </h1>

						 <div className="flex flex-col text-center items-center">
							 <div className="flex flex-row">
								 <h1
								  className="text-slate-900 dark:text-white font-bold text-4xl tracking-tight text-center relative z-10">
									 e você só precisa
								 </h1>
								 <h1
								  className="margin-l-9 margin-r-9 text-gradient text-4xl font-bold tracking-tighter">Curtir</h1>
								 <h1
								  className="text-slate-900 dark:text-white font-bold text-4xl tracking-tight text-center relative z-10">
									 o dia e o ambiente.
								 </h1>
							 </div>
						 </div>
					 </div>
					 <img src={Oculos} className="oculos ml-20 cel:ml-0 object-contain img-size"></img>
				 </div>
				 {/*<div style={{ height: "1000px" }}></div>*/}

			 </div>
		 </div>
	 </section>
	)
}

export default Sunglasses;
