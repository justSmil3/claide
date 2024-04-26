"use client"
import Infinigal from "components/Infinigal";

const Gallery = () => {
	return(
		<div>
			<Infinigal imageClassName="mx-1 my-1" maxImages={50} />	
		</div>
	);
};

export default Gallery;
