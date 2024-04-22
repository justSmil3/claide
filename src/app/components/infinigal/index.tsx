// components/InfiniteGallery.tsx
import React, { useEffect, useState } from 'react';

interface Image {
  id: number;
  src: string;
}

const Infinigal: React.FC = () => {
  const [images, setImages] = useState<Image[]>([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (loading) {
      const loadImages = async () => {
        // Simulate fetching images
        const newImages = Array.from({ length: 30 }, (_, i) => ({
          id: i + page * 30,
          src: `https://picsum.photos/200/300?random=${i + page * 30}`,
        }));
        setImages((prev) => [...prev, ...newImages]);
        setLoading(false);
      };    

      loadImages();
    }
  }, [page, loading]);

  const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
    const { scrollTop, clientHeight, scrollHeight } = event.currentTarget;
    console.log(scrollHeight + ":" + scrollTop + ":" + clientHeight)
    if (scrollHeight - scrollTop <= clientHeight + 100) { // 10px leeway to trigger loading a bit before reaching the bottom
      setPage((prev) => prev + 1);
      setLoading(true);
    }
  };

  return (
    <div onScroll={handleScroll} className="overflow-auto h-screen">
      <div className="flex flex-wrap">
        {images.map((img) => (
          <img key={img.id} src={img.src} alt={`Random ${img.id}`} className="w-1/6 p-1" />
        ))}
      </div>
    </div>
  );
};

export default Infinigal;
