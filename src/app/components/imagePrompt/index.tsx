"use client"
import { useState, useRef } from 'react';

const ImagePrompt = ({className="", inputText=""}:{
    className:string;
	inputText:string;
}) => {
	const [image, setImage] = useState(null);
	const [isHovered, setIsHovered] = useState(false);

	const fileInputRef = useRef(null);

	const handleImageUpload = (e: any) =>  {
		const file = e.target.files[0];
		if (file){
			const imageUrl = URL.createObjectURL(file);
			setImage(imageUrl);
		}
	}
	const handleDeleteImage = (e: any) => {
		if(image){
			e.stopPropagation();
			setImage(null);
		}
	}

	const handleImageClick = () => {
		if(image) {
			return;
		}
		fileInputRef.current.click();
	};

    return(
        <div className={`${className}`}>
            <div 
			className={`w-full h-full items-center border border-2 border-gray-600 rounded-2xl cursor-pointer ${image ? "bg-gray-600" : "bg-transparent"}`}
			  onClick={handleImageClick}
			>
			{image ? (
				<div
				  className="rounded-2xl w-full h-full bg-center bg-no-repeat bg-cover flex relative items-center justify-center"
				  onMouseEnter={() => setIsHovered(true)}
				  onMouseLeave={() => setIsHovered(false)}
				  style={{
					backgroundImage: `url(${image})`,
					transform: `scale(1)`,
					backgroundSize: `contain`,
					backgroundPosition: `center`,
				  }}
				>
				  {isHovered && (
					  <div className="flex w-full h-full items-center justify-center">
					    <div
						  className="absolute top-2 right-2"
						>
						  <button
							onClick={handleDeleteImage}
							className="bg-gray-100 bg-opacity-40 p-1 rounded-full"
							style={{
								transform: `scale(1)`,
								zIndex: 1,
							}}
						  >
							<svg
							  xmlns="http://www.w3.org/2000/svg"
						      className="h-4 w-4 text-gray-600"
                   		      fill="none"
                   		      viewBox="0 0 24 24"
                   		      stroke="currentColor"
							>
							  <path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M6 18L18 6M6 6l12 12"
							  />
							</svg>
						  </button>
						</div>	  
				    <div className="rounded-2xl flex w-1/2 h-1/2 inset-0 bg-gray-600 opacity-50 group-hover:opacity-100 transition-opacity flex items-center justify-center">
				      <svg
				        xmlns="http://www.w3.org/2000/svg"
				        className="h-12 w-12 text-white"
				        viewBox="0 0 24 24"
				        fill="none"
				        stroke="currentColor"
				      >
				        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M11 4H6C4.93913 4 3.92178 4.42142 3.17163 5.17157C2.42149 5.92172 2 6.93913 2 8V18C2 19.0609 2.42149 20.0783 3.17163 20.8284C3.92178 21.5786 4.93913 22 6 22H17C19.21 22 20 20.2 20 18V13"
                        />
				        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M21.2799 6.40005L11.7399 15.94C10.7899 16.89 7.96987 17.33 7.33987 16.7C6.70987 16.07 7.13987 13.25 8.08987 12.3L17.6399 2.75002C17.8754 2.49308 18.1605 2.28654 18.4781 2.14284C18.7956 1.99914 19.139 1.92124 19.4875 1.9139C19.8359 1.90657 20.1823 1.96991 20.5056 2.10012C20.8289 2.23033 21.1225 2.42473 21.3686 2.67153C21.6147 2.91833 21.8083 3.21243 21.9376 3.53609C22.0669 3.85976 22.1294 4.20626 22.1211 4.55471C22.1128 4.90316 22.0339 5.24635 21.8894 5.5635C21.7448 5.88065 21.5375 6.16524 21.2799 6.40005V6.40005Z"
                        />
				      </svg>
				    </div>
					</div>
				  )}
				  </div>
			) : (
			<div className="flex items-center justify-center w-full h-full text-gray-600">
			  <div className="flex w-1/2 justify-center items-center">
			    <p className="text-center select-none">
			      {inputText}
			    </p>
			  </div>
			</div>
			)}
			</div>
			  <input
			    type="file"
				onChange={handleImageUpload}
				className="hidden"
				ref={fileInputRef}
			  />
        </div>
    );
};

export default ImagePrompt;
