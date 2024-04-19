"use client";
import { useState } from 'react';
import { useRouter } from 'next/router'

const Prompt = ({text, changeText, lable, className} : 
				{text:string;
				 changeText: (e) => void;
				 labletext:string;
				 className:string;}
			   ) => {
	const [promptText, setPromptText] = useState('');
	
	const promptTextChange = (e) => {
		setPromptText(e.target.value);
	};

	return(
		<div className={className}>
		<div className="w-full h-full">
		<div>
		<span className="text-gray-600 pl-2">{lable}</span>
		</div>
		<div className="w-full h-full border border-2 border-red-400 rounded-2xl flex items-center">
		<textarea className="bg-transparent h-full w-full outline-none focus:outline-none p-2"
					placeholder="what should your design depict?"
					value={text}
					onChange={(e) => changeText(e)}/>
		</div>
		</div>
		</div>
	);
};

export default Prompt;
