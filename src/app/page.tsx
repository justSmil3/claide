import ContactForm from "components/contactForm";

export default function Page() {
	return(
		<div className="static">
		<div className="relative w-screen h-[94vh]">
		  <div className="absolute top-0 w-full h-full bg-red-600 z-10">
			<div className="flex w-full h-full">
				<div className="w-full h-full">
				  <img alt="src-img 01" src="https://picsum.photos/512/768?random=1" className="h-full w-full object-cover" />
				</div>
				  <div className="w-full h-full hidden sm:block">
				  <img alt="src-img 02" src="https://picsum.photos/512/768?random=2" className="h-full w-full object-cover"/>
				</div>
				  <div className="w-full h-full hidden xl:block">
				    <img alt="src-img 03" src="https://picsum.photos/512/768?random=3" className="h-full w-full object-cover" />
				  </div>
				  <div className="w-full h-full hidden 2xl:block">
					<img alt="src-img 04" src="https://picsum.photos/512/768?random=4" className="h-full w-full object-cover" />	
				  </div>
			  </div>
		    </div>
		  <div className="w-full h-full flex items-center bg-gray-800 bg-opacity-60 relative z-20">
		    <div className="grid grid-cols-3 w-full -mt-16">
		      <div />
			  <div className="text-white font-bold text-6xl">
				<p>Catch Phrase!</p>
			  </div>
			  <div />
			  <div />
			  <div className="text-gray-300 text-3xl">
				<p>Description of Catch Phrase</p>
			  </div>
			  <div />
		    </div>
		  </div>
		</div>
		<div className="bg-slate-900 text-white relative z-10"> 
		  <div className="grid grid-cols-2 w-full">
		  <div className="bg-gray-500 h-[80vh] items-center justify-center flex flex-col items-center">
			  <div className="font-bold text-3xl w-1/2">
			    Design Clothes
			  </div>
			  <div className="w-1/2">
				use the AI assistant to create Clothing designs just from your thoughts
			  </div>
			</div>
			<div className="h-[80vh]">
			</div>
			<div className="h-[80vh]">
			</div>
			<div className="bg-gray-500 h-[80vh] items-center justify-center flex flex-col items-center">
			  <div className="font-bold text-3xl w-1/2">
			    Adjust Patterns
			  </div>
			  <div className="w-1/2">
				use the AI assistant to create Clothing designs just from your thoughts
			  </div>
			</div>
			<div className="bg-gray-500 h-[80vh] items-center justify-center flex flex-col items-center">
			  <div className="font-bold text-3xl w-1/2">
			    Refine Designes
			  </div>
			  <div className="w-1/2">
				use the AI assistant to create Clothing designs just from your thoughts
			  </div>
			</div>
			<div className="h-[80vh]">
			</div>
			<div className="h-[80vh]">
			</div>
			<div className="bg-gray-500 h-[80vh] items-center justify-center flex flex-col items-center">
			  <div className="font-bold text-3xl w-1/2">
			    Create Variations
			  </div>
			  <div className="w-1/2">
				use the AI assistant to create Clothing designs just from your thoughts
			  </div>
			</div>
		  </div>
		  <div className="h-48 flex items-center justify-center bg-slate-400">
			<div className="font-bold text-3xl">
			  <p>And so much more planed</p>
			</div>
		  </div>
		  </div>
		<div className="w-full h-[70vh] bg-red-400 relative">
		</div>
		<div className="fixed bottom-[15vh] w-full flex flex-col items-center">
		<div className="text-4xl text-black font-bold w-[80%] md:w-[37rem]">
		    <p>Get in touch</p>
		  </div>
		  <ContactForm className="w-[80%] md:w-[37rem]"/>
		</div>
		</div>
	);
};
