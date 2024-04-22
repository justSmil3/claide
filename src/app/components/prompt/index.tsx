"use client";
import { useState } from 'react';
import { useRouter } from 'next/router'

const Prompt = ({text, changeText, lable, className} :
				{text:string;
				 changeText: (e:string) => void;
				 lable:string;
				 className:string;}
			   ) => {

	return(
		<div className={className}>
		<div className="w-full h-full">
		<div className="w-full h-full border border-2 border-red-400 rounded-2xl flex items-center">
		<textarea className="bg-transparent h-full w-full outline-none focus:outline-none p-2"
					placeholder="what should your design depict?"
					value={text}
					onChange={(e) => changeText(e.target.value)}/>
		</div>
		</div>
		</div>
	);
};

export default Prompt;
