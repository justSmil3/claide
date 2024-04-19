import React from 'react';
import Link from "next/Link";

const LoginButton = () => {
	return(
		<div>
		  <button type="button" className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 shadow-lg shadow-teal-500/50 dark:shadow-lg dark:shadow-teal-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Login</button>
		</div>
	);
};

const BurgerButton = ({onClick, className}) => {
	return(
		<div className={className}>
		  <button className="w-5 space-y-1" onClick={onClick}>
			<div className="h-0.5 w-5 bg-current" />
			<div className="h-0.5 w-5 bg-current" />
			<div className="h-0.5 w-5 bg-current" />
		  </button>
		</div>
	);
};

export { LoginButton, BurgerButton };
