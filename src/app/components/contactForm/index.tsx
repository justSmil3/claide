"use client"

import { useState } from 'react';

const ContactForm = ({className}:{
	className:string;
}) => {
	return(
	  <div className={`${className}`}>
	    <form>
		  <lable for="cf_email" className="text-primary">Email:</lable><br />
		  <input className="w-[35vh] bg-transparent outline-none border border-2 rounded-2xl border-primary text-primary p-2" type="email" id="cf_email" required/><br />
		  <lable for="cf_message" className="text-primary">Your Message:</lable><br />
		  <textarea className="p-2 h-48 w-full outline-none border border-2 rounded-2xl border-primary bg-transparent text-primary break-words" id="cf_message" required /><br />
		  <button type="submit" className="text-primary">Submit</button><br />
		</form> 
	  </div>
	);
}

export default ContactForm;
