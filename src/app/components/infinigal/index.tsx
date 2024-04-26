// components/InfiniteGallery.tsx
'use client'
import React, { useEffect, useState, useCallback, useRef } from 'react';
import ImageButton from "components/imageButton";

interface Image {
  id: number;
  src: string;
}

const Infinigal: React.FC = ({
	maxImages=-1, 
	className="", 
	startPage=0, 
	imageClassName=""
	}:{
	maxImages:number;
	className:string;
	startPage:number;
	imageClassName:string;
}) => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, _setPage] = useState<int>(-1);
  const pageRef = useRef(page);
  const setPage = data => {
	pageRef.current = data;
	_setPage(data);
  };
  const imagesPerRow = 4;

  useEffect(() => {
    //add eventlistener to window
    window.addEventListener("scroll", onScroll, { passive: true });
    // remove event on unmount to prevent a memory leak with the cleanup
    return () => {
       window.removeEventListener("scroll", onScroll, { passive: true });
    }
  }, []);

  useEffect(() => {
    const loadImages = async () => {
      // Simulate fetching images
	 
	  if (page < 0)
		  {
			  setPage(0);
			  return;
		  }
	  // this is just to counteract the double useEffect from next mounting ... 
	  if (images.length > page*imagesPerRow*2 || (images.length > maxImages && maxImages > 0))
		return;
      const newImages = Array.from({ length: imagesPerRow*2 }, (_, i) => ({
        id: i + page * 8,
        src: `https://picsum.photos/512/768?random=${i + page * imagesPerRow * 2}`,
      }));
      setImages((prev) => [...prev, ...newImages]);
	  console.log(images.length, "hi", page*imagesPerRow * 2);
    };
	console.log("test");
    loadImages();
  }, [page]);

  const onScroll = useCallback(event => {
      const { pageYOffset, scrollY, innerHeight } = window;
	  console.log(startPage);
	  console.log("imp", (pageRef.current+1)*innerHeight-100, (pageRef.current+startPage)*innerHeight-100, pageRef.current+1, pageRef.current+startPage);
	  if(scrollY > (pageRef.current+startPage)*innerHeight-100){
		  setPage(pageRef.current+1);
	  }
  }, []);

  return (
    <div className="flex flex-wrap justify-center">
      {images.map((img) => (
		  <div key={img.id} className={`xl:w-1/5 ${imageClassName} justify-center`}>
		{/*<img src={img.src} alt={`Random ${img.id}`} className="mx-auto rounded-xl" />*/}
		<ImageButton ID={img.id} alt={`Random ${img.id}`} imageClassName="mx-auto rounded-xl" />	
		</div>
	  ))}
    </div>
  );
};

export default Infinigal;
