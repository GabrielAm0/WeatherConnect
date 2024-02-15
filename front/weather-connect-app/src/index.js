import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import ThemeContextProvider from './hooks/useTheme';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
 <ThemeContextProvider>
    <App />
	 </ThemeContextProvider>

	 );
