import React, { useLayoutEffect } from 'react'
import Card from "../cards/card";
import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger'



function InfoCard() {

	useLayoutEffect(() => {
		gsap.registerPlugin(ScrollTrigger);

		gsap.to('#div-cards', {
			y: 0,
			opacity: 1,
			scrollTrigger: {
				// markers: true,
				trigger: '#sec-trig',
				start: '-8px',
				end: '360px',
				scrub: true,
			},
		})


		return () => {
			gsap.killTweensOf('.guarda-chuva')
		}

	}, [])

	return (<>
		<section id="div-master-cards" className="bg-white dark:bg-slate-900 pt-2 flex items-center justify-center flex-wrap mx-auto">
			<div className="container">
				<div className="flex flex-col items-center justify-center">
					<div id="div-cards" className="flex gap-10 flex-row media-fd items-center justify-center">
						<Card />
					</div>
				</div>
			</div>
		</section>

	</>)
}

export default InfoCard;
