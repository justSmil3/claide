"use client"
import React from "react";
import { useState } from 'react';
import Prompt from "components/prompt";
import ImagePrompt from "components/imagePrompt";
import Infinigal from "components/infinigal";

const Create = () => {
	const [promptText, setPromptText] = useState('');

	return(
		<div>
		  <div className="flex w-screen h-[94vh] items-center justify-center">
			<div className="w-3/4 mx-4">
		      <div className="flex w-full h-36 gap-x-4 justify-center">
		        <Prompt text={promptText.get} changeText={setPromptText} className="grow"/>
		  	    <ImagePrompt className="w-36 h-full align-baseline" inputText="pattern" />
		  	    <ImagePrompt className="w-36 h-full align-botbot" inputText="reference sketch" />
		      </div>
			  <div className="px-1 pt-2 flex justify-between">
				<button type="button" className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-2xl">Settings</button>
				<button type="button" className="bg-blue-500 hover:bg-blue-700 py-2 px-4 rounded-2xl">Generate</button>
			  </div>
			</div>
		  </div>
		  <div>
			<Infinigal startPage={1} imageClassName="mx-4 my-4" maxImages={50} />
		  </div>
		</div>
	);
};

export default Create;
