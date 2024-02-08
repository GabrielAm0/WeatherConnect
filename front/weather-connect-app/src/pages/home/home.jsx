import Header from "../../components/header";
import React, {useEffect} from 'react';
import Footer from "../../components/footer";
import Slogan from "./components/sections/slogan";
import Umbrela from "./components/sections/umbrela";
import InfoCards from "./components/sections/infoCards";
import Sunglasses from "./components/sections/sunglasses";
import Contact from "./components/sections/contact";



function Components() {
	
	return (
	 <>
		 <Header/>

		 <Slogan/>

		 <Umbrela/>

		 <InfoCards/>

		 <Sunglasses/>

		 <Contact/>

		 <Footer/>
	 </>
	)
}

export default Components;
