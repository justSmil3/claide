"use client"
import React from "react";
import { useState } from 'react';
import Prompt from "components/prompt";

const Create = () => {
	const [promptText, setPromptText] = useState('');

	return(
		<div>
		  <p>Create!</p>
		  <div className="flex px-4 gap-x-4">
		    <Prompt text={promptText.get} changeText={setPromptText} lable="Image Prompt" className="w-1/2"/>
		    <Prompt className="w-1/2" text={promptText.get} changeText={setPromptText} lable="Image Prompt" />
		  </div>
		</div>
	);
};

export default Create;
