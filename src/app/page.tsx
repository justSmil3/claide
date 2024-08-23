import ContactForm from "components/contactForm";


export default function Page() {
	return(
		<div className="static">
		<div className="relative w-full h-[94vh]">
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
			  <div className="text-secondary font-bold text-6xl">
				<p className="text-shadow">Catch Phrase!</p>
			  </div>
			  <div />
			  <div />
			  <div className="text-secondary text-3xl">
				<p className="text-shadow-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla faucibus venenatis enim, gravida porttitor libero viverra ut. Donec sodales mollis.</p>
			  </div>
			  <div />
		    </div>
		  </div>
		</div>
		<div className="bg-dark text-secondary relative z-10"> 
		  <div>
			{/* display list of features in here*/}
			<div>
			  STRAIGHT FROM YOUR IDEAR TO A PROFESSIONAL DESIGN
			</div>
			<div>
			  NOT JUST AN AI, BUT A TOOL
			</div>
			<div>
			  DESIGNED WITH INTUITION IN MIND
			</div>
			<div>
			  ITERATIVELY PERFECTION YOUR DESIGN
			</div>
			<div>
			  APPLY DIFFERENT PATTERNS AND FABRICS
			</div>
			<div>
			  CREATE LOOKBOCKS
			</div>
			<div>
			  ROADMAP
			</div>
		  </div>
		</div>
		<div className="w-full h-[70vh] bg-secondary relative">
		</div>
		<div className="fixed bottom-[15vh] w-full flex flex-col items-center">
		<div className="text-4xl text-primary font-bold w-[80%] md:w-[37rem]">
		    <p>Get in touch</p>
		  </div>
		  <ContactForm className="w-[80%] md:w-[37rem]"/>
		</div>
		</div>
	);
};
