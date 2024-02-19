import Header from "../components/header";
import Footer from "../components/footer";
import Clima from "../pages/clima/clima";
import Home from "../pages/home/home";
import {useLocation} from "react-router-dom";


function Dashboard() {

	const location = useLocation();

	function montaComponente() {

		switch (location.pathname) {
			case "/home":
				return (
				 <>
					 <Home/>
				 </>
				
			)
				;
			case "/clima":
				return (
				 <>
					 <Clima/>
				 </>
				);
		}
		
	}
	
	return (
	 <>
		 <div className="bg-white">
			 <Header/>
			 {montaComponente()}
			 <Footer/>
		 </div>

	 </>
	);
};

export default Dashboard;