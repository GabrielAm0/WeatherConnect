import Header from "../../components/header";
import React, {useEffect} from 'react';
import Footer from "../../components/footer";
import Slogan from "./components/sections/slogan";
import Umbrela from "./components/sections/umbrela";
import InfoCards from "./components/sections/infoCards";
import Sunglasses from "./components/sections/sunglasses";
import Contact from "./components/sections/contact";


function Components() {

	document.body.classList.remove('no-scroll');
	window.scrollTo(0, 0);

	return (
	 <>
		 <div className="h-100 bg-white dark:bg-slate-900">
			 
			 <Header/>

			 <Slogan/>

			 <Umbrela/>

			 <InfoCards/>

			 <Sunglasses/>

			 <Contact/>

			 <Footer/>
			 
		 </div>
	 </>
	)
}

export default Components;
