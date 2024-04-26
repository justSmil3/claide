"use client"
import ContactForm from "components/contactForm"

const AboutUs = () => {
	return(
	  <div className="w-screen h-[94vh] pt-20">
	    <div className="w-full text-center">
		  <div className="text-gray-400 text-sm">
		    <p>[company name]</p>
		  </div>
	      <div className="font-bold text-4xl">
		    <p>Imprint</p>
		  </div>
		  <div className="pt-4">
		    <p>[company address line 1]</p>
		    <p>[company address line 2]</p>
		    <p>[company address line 3]</p>
		    <p>[company address line 4]</p>
			<p>[company email]</p>
		  </div>
		  <div className="text-black font-bold text-2xl pt-8">
		    <p>Contact Us</p>
		  </div>
		  <div className="w-full flex justify-center pt-4">
		  <ContactForm className="w-[80%] md:w-[40%]" />
		  </div>
		  <div className="w-full flex items justify-center gap-x-4 pt-8">
		    <div className="text-gray-600 text-sm">
			  <p>Terms of use</p>
			</div>
			<div className="text-gray-600 text-sm">
			  <p>Privacy Policy</p>
			</div>
		  </div>
		</div>
	  </div>
	);		
};

export default AboutUs;
