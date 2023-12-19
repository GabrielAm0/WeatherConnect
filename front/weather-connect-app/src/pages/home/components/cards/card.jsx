import React from 'react'
import BH from "../../../../assets/img/home/bh.jpg";
import SP from "../../../../assets/img/home/SP.jpg";
import RJ from "../../../../assets/img/home/RJ.jpg";
import PA from "../../../../assets/img/home/PA.jpg";
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'
import {useLayoutEffect} from 'react'

function Card() {

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('#Card0', {
			x: -700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '590px',
				end: '900px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('#Card1', {
			x: -700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '590px',
				end: '900px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('#Card2', {
			x: +700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '590px',
				end: '900px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		gsap.to('#Card3', {
			x: +700,
			opacity: 0,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '590px',
				end: '900px',
				scrub: true,
			},
		})

		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])


	let cidades = {
		"cidade1": {
			"nome": "Belo Horizonte",
			"imagem": BH,
			"temperatura": "22ºC",
			"PorChuva": "70%",
			"Umidade": "66%",
		},
		"cidade2": {
			"nome": "São Paulo",
			"imagem": SP,
			"temperatura": "24ºC",
			"PorChuva": "40%",
			"Umidade": "30%",
		},
		"cidade3": {
			"nome": "Rio de Janeiro",
			"imagem": RJ,
			"temperatura": "27ºC",
			"PorChuva": "0%",
			"Umidade": "10%",
		},
		"cidade4": {
			"nome": "Porto Alegre",
			"imagem": PA,
			"temperatura": "23ºC",
			"PorChuva": "20%",
			"Umidade": "22%",
		}
	}

	function repetirCard() {


		let i;
		i = 0;


		let cards = [];


		cards.push(
		 Object.keys(cidades).map((key) => {

			 let cidade = cidades[key];
			 return (
			  <div id={"Card" + i++} className="max-w-sm bg-white border border-gray-400 rounded-lg shadow ">
				  <div className="img-card bg-cover rounded-t-lg" style={{backgroundImage: `url(${cidade.imagem})`}}>
					  <div className="overlay"></div>
				  </div>
				  <div className="p-5 flex flex-col justify-center items-center">
					  <h5
					   className="mb-2 text-2xl font-bold tracking-tight text-gray-900 text-center">{cidade.nome}</h5>
					  <div className="flex gap-4 flex-row items-center text-center justify-center">
						  <div className="flex flex-col justify-center items-center">
							  <h3
							   className="text-xl font-semibold text-gray-700 text-center">{cidade.temperatura}</h3>
							  <small className='tracking-tight'>Temperatura C°</small>

						  </div>
						  <div className="flex flex-col justify-center items-center">
							  <h3
							   className="text-xl font-semibold text-gray-700 text-center">{cidade.Umidade}</h3>
							  <small className='tracking-tight'>Umidade</small>
						  </div>
						  
						  <div className="flex flex-col justify-center items-center">
							  <h3
							   className="text-xl font-semibold text-gray-700 text-center">{cidade.PorChuva}</h3>
							  <small className='tracking-tight'>Chance de chuva</small>
						  </div>
					  </div>
				  </div>
			  </div>
			 )
		 })
		);
		return cards;
	}

	return (
	 <>
		 {repetirCard()}
	 </>
	)
}

export default Card;
