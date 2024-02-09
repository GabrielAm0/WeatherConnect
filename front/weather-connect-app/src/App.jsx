import Header from "./components/header";
import Home from "./pages/home/home";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Dashboard from './pages/dashboard';

function App() {
	return (
		 <Router>
			 <Routes>
				 <Route path="/" element={<Home/>} exact/>
				 <Route path="/home" element={<Home/>} exact/>
				 <Route path="/*" element={<Dashboard/>} exact/>
			 </Routes>
		 </Router>

	);
}

export default App;
