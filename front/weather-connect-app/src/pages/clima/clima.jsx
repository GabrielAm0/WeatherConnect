import React from 'react'
import Item1 from "./components/sections/item1";

export default function Clima() {

	document.body.classList.add('no-scroll');
	window.scrollTo(0, 0);

	return (
	 <div className="h-100 bg-white dark:bg-slate-900">
		 <Item1/>
	 </div>
	)
}
