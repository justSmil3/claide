"use client"
import Prompt from "components/prompt";

const Page = ({params}:{params:{id:number}}) => {
	
	return(
		<div>
		<div className="w-full h-[94vh] flex flex-col gap-y-4 justify-center items-center">
			<div className="flex w-[70%] max-h-[70%] gap-x-2">
			<div className="w-[10%] border bg-slate-400 rounded-2xl border border-2 border-slate-400">
			</div>
			<div className="border border-2 rounded-2xl border-slate-400 bg-slate-400 w-[65%] aspect-square">
				<img className="object-contain w-full h-full" src={`https://picsum.photos/512/768?random=${params.id}`} />
			</div>
			<div className="bg-slate-400 w-[25%] border-2 border-slate-400 rounded-2xl">
			</div>
			</div>
			<div className="w-full flex justify-center">
			<Prompt className="h-36 w-[70%]"/>
			</div>
			<div className="px-1 -mt-2 w-[70%] flex justify-end">
				<button type="button" className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-2xl">Generate</button>
			  </div>
		</div>
		<div className="bg-teal-400 w-screen h-screen flex items-center justify-center">
			<div className="font-bold text-4xl">
				<p>Space for the project history</p>
			</div>
		</div>
		</div>
	);
};

export default Page;
