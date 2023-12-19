import Header from "../components/header";
import Clima from "../pages/clima/clima";
import {useLocation} from "react-router-dom";


function Dashboard() {

	const location = useLocation();

	function montaComponente() {
		if (location.pathname === "/clima") {
			return (
			 <>
				 <Clima/>
			 </>
			);
		} else if (location.pathname === "/astronomia") {
			return (
			 <>
				 <h1 className={'py-20'}>Astronomia</h1>
			 </>
			);
		}
	}

	console.log(location.pathname);

	return (
	 <>
		 <Header/>
		 {montaComponente()}
	 </>
	);
};

export default Dashboard;