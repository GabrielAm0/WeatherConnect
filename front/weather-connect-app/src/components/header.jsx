﻿import {NavLink, useLocation} from 'react-router-dom';
import Foto from '../assets/img/logo.png';
import {useState} from "react";
import {MdDarkMode, MdMenu} from "react-icons/md";
import { BsSunFill } from "react-icons/bs";
import {useTheme} from "../hooks/useTheme";

function Header() {
	const location = useLocation();

	const isNavLinkActive = (path) => {
		return location.pathname === path;
	};

	const [isMenuOpen, setMenuOpen] = useState(false);

	const toggleMenu = () => {
		setMenuOpen(!isMenuOpen);
	};

	const {theme, setTheme} = useTheme();

	return (
	 <header className="fixed w-full top-0 z-50">
		 <nav className="py-3 header">
			 <div className="flex items-center justify-center flex-wrap mx-auto">
				 <div className="container">
					 <div className="flex flex-row justify-between items-center mx-auto">
						 <div className="flex flex-row items-center">
							 <ul className="font-semibold  lg:flex-row lg:space-x-8 lg:mt-0 flex">
								 <li>
									 <NavLink to="/home" className={'flex flex-row items-center justify-center cel:ml-5'}>
										 <img src={Foto} alt="Weather Connect Logo" className="w-10 h-10 mr-2"/>
										 <div className="text-gradient">
											 <span className="text-2xl font-bold text-slate-700 tracking-tighter">Weather Connect</span>
										 </div>
									 </NavLink>
								 </li>
							 </ul>
						 </div>
						 <div className="flex flex-row items-center">
							 <button onClick={toggleMenu} className="lg:hidden" >
								 <MdMenu size={30} className="text-slate800 dark:text-slate-200 hover:text-slate-500 mr-5"/>
							 </button>
							 <ul className={`font-semibold flex ${isMenuOpen ? 'flex' : 'hidden'} lg:flex lg:space-x-8 lg:mt-0`}>
								 <li>
									 <NavLink
									  to="/home"
									  activeclassname="text-slate-500"
									  className={`text-slate-800 hover:text-slate-500 cel:mr-2 ${isNavLinkActive('/home') ? 'text-gradient font-extrabold' : ''}dark:text-slate-200`}
									 >
										 Home
									 </NavLink>
								 </li>
								 <li>
									 <NavLink
									  to="/clima"
									  activeclassname="text-slate-500"
									  className={`text-slate-800 hover:text-slate-500 cel:mr-2 ${isNavLinkActive('/clima') ? 'text-gradient font-extrabold' : ''}dark:text-slate-200`}
									 >
										 Clima
									 </NavLink>
								 </li>

								 <li className="flex items-center">
									 <a
									  href="https://github.com/GabrielAm0/WeatherConnect"
									  target="_blank"
									  className="ml-1 block text-slate800 cel:mr-2 hover:text-slate-500 dark:text-slate-200" rel="noreferrer"
									 >
										 <svg viewBox="0 0 16 16" className="w-5 h-5" fill="currentColor"
										      aria-hidden="true">
											 <path
											  d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"
											 ></path>
										 </svg>
									 </a>
								 </li>

								 <li className="flex items-center">
									 {theme === 'light' ?
									  <MdDarkMode size={22} className="cel:mr-2 cursor-pointer text-slate800 dark:text-slate-200 hover:text-slate-500" onClick={() => setTheme("dark")}></MdDarkMode> : 
									  (<BsSunFill size={22} className="cel:mr-2 cursor-pointer text-slate800 dark:text-slate-200 hover:text-slate-500" onClick={() => setTheme("light")}></BsSunFill>)
									 }
								 </li>
							 </ul>
						 </div>
					 </div>
				 </div>
			 </div>
		 </nav>
	 </header>
	);
}

export default Header;
