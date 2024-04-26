"use client";
import { useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

const Navigation = () => {
	const [isOpen, setIsOpen] = useState(false);
	const toggle = () => {
		setIsOpen(false);
	};
	const toggleOn = () => {
		setIsOpen(!isOpen);
	};
	return(
		<>
		  <Sidebar isOpen={isOpen} toggle={toggle} />
		  <Navbar toggle={toggle} onToggle={toggleOn} />
		</>
	);
};

export default Navigation;
