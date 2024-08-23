import React from "react";
import Link from "next/Link";
import Logo from "./Logo";
import { LoginButton, BurgerButton } from "./Button";

const Navbar = ({toggle, onToggle}:
				{toggle: () => void;
				 onToggle: ()=> void;}) => {
	return(
	  <>
	  <div className="w-full h-[6vh] bg-orange-800 sticky top-0 z-50 bg-primary text-secondary">
	      <div className = "container mx-auto px-4 w-full h-full">
		    <div className = "flex justify-between items-center h-full">  
			  <BurgerButton className="md:hidden block" onClick={onToggle}/>
		      <Logo />
			  <div className="flex gap-x-6 items-center">
			    <ul className="hidden md:flex gap-x-6">
			      <li>
			        <Link href="/" onClick={toggle}>
			          <p>Home</p>
			        </Link>
			      </li>
			      <li>
			        <Link href="/Create" onClick={toggle}>
					<p>Create</p>
			        </Link>
			      </li>
			      <li>
				    <Link href="/Gallery" onClick={toggle}>
					  <p>Gallery</p>
					</Link>
				  </li>
				  <li>
				    <Link href="/Plans" onClick={toggle}> 
					  <p>Pricing</p>
					</Link>
				  </li>
				  <li>
				    <Link href="/AboutUs" onClick={toggle}>
					  <p>About Us</p>
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
