import React, { useState, useEffect, useRef } from "react";

const LazyYoutube = ({ videoId }: { videoId: string }) => {
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const videoRefCurrent = videoRef.current;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setLoad(true);
        observer.disconnect();
      }
    });

    observer.observe(videoRefCurrent!);

    return () => {
      if (videoRefCurrent!) {
        observer.unobserve(videoRefCurrent!);
      }
    };
  }, [videoRef]);

  return (
    <div ref={videoRef} className="flex justify-center">
      {load ? (
        <iframe
          className="max-w-sm w-full h-full mx-auto"
          width="560"
          height="515"
          src={`https://www.youtube.com/embed/${videoId}`}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default LazyYoutube;
