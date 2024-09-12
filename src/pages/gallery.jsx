import React from "react";

function Gallery() {
  const galleryImages = [
    "/ga1.JPG",
    "/img2.jpg",
    "/ga2.JPG",
    "/img.jpg",
    "/img7.jpg",
    "/img8.jpg",
    "/img5.jpg",
    "/img6.jpg",
    "/img3.jpg",
    
  ];

  return (
    <div>
      <div className="text-white mt-[6rem] font-bold text-[3.5rem] text-center">
        Gallery
      </div>
      <div className="px-4 sm:px-6 lg:px-8 py-10">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {galleryImages.map((src, index) => (
          <div key={index} className="w-full h-auto">
            <img
              src={src}
              alt={`Gallery image ${index + 1}`}
              className="w-full h-auto object-cover rounded-lg shadow-lg"
            />
          </div>
        ))}
      </div>
    </div>
    </div>
  );
}

export default Gallery;
