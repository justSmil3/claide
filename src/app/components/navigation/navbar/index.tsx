import React from "react";
import Link from "next/Link";
import Logo from "./Logo";
import { LoginButton, BurgerButton } from "./Button";

const Navbar = ({toggle, onToggle}:
				{toggle: () => void;
				 onToggle: ()=> void;}) => {
	return(
	  <>
	    <div className="w-full h-16 bg-orange-800 fixed top-0">
	      <div className = "container mx-auto px-4 w-full h-full">
		    <div className = "flex justify-between items-center h-full">  
			  <BurgerButton className="md:hidden block" onClick={onToggle}/>
		      <Logo />
			  <div className="flex gap-x-6 items-center">
			    <ul className="hidden md:flex gap-x-6 text-white">
			      <li>
			        <Link href="/Create" onClick={toggle}>
			          <p>Create</p>
			        </Link>
			      </li>
			      <li>
			        <Link href="/Refine" onClick={toggle}>
			          <p>Refine</p>
			        </Link>
			      </li>
			      <li>
			        <Link href="/Editor" onClick={toggle}>
			          <p>Editor</p>
			        </Link>
			      </li>
			    </ul>
			    <LoginButton />
			  </div>
		    </div>
		  </div>
	    </div>
	  </>
	);
};

export default Navbar;
