"use client"

const Plans = () => {
	return(
		<div>
		  <div className="w-screen h-[94vh]">
		  <div className="w-full h-full p-40 grid grid-cols-1 lg:grid-cols-2">
			  <div className="mx-20 my-10 p-4 border border-black border-2 rounded-2xl">
			    <div>
				  <p>Monthly Subscription</p>
				</div>
			  </div>
			  <div className="mx-20 my-10 p-4 border border-black border-2 rounded-2xl">
			    <div>
				  <p>Pay as you go</p>
				</div>
			  </div>
			</div>
		  </div>
		</div>
	);
}

export default Plans;
