import Link from "next/Link";

const ImageButton = ({ID, alt="", className="", imageClassName=""}) => {

	return(
		<div className={className}>
		<Link href = {{
			pathname: "Projects/[id]",
			query: {
				id: ID
			}
		}} as={`Projects/${ID}`}> 
		<img src={`https://picsum.photos/512/768?random=${ID}`} alt={alt} className={imageClassName} />	
			</Link>
		</div>
	);
};

export default ImageButton;
