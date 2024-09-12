import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Slider from "react-slick";
import back from "../../public/back.jpg";
import draw from "../../public/draw.jpg";
import first from "../../public/img9.jpg";
import office from "../../public/img4.jpg";
import pray from "../../public/prau.jpg";
import newY from "../../public/ga3.jpg";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Memories() {
  const [expanded, setExpanded] = useState({});

  const handleToggle = (id) => {
    setExpanded((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  const data = [
    {
      id: 1,
      title: "Sketching Our Way Through the Stress",
      image: draw,
      description:
        "On a day when we were supposed to be studying for our geography mid-exam, the stress got to us. But instead of letting it take over, we decided to have some fun and create this sketch together. It was a moment that turned stress into something special, and a memory we'll always cherish.",
    },
    
    {
      id: 3,
      title: "Our First Date at Coffeecology",
      image: first,
      description:
        "Our first official date as a couple began at Coffeecology with a perfect morning coffee. It was sweet, tender, and the start of something beautiful.",
    },
    
    {
      id: 5,
      title: "First Office Day After Graduation",
      image: office,
      description:
        "On my first day at the office after graduation, you came to support me, and we sat together for 3 hours, sharing that moment. Though I couldn't find the picture from our first day, this one from our 4th day reminds me of how special you made me feel during that time.",
      position: "Helder Technologies Solution",
    },
    {
      id: 4,
      title: "Our First Adventure in Debrezeit",
      image: back,
      description:
        "Our first trip outside the city took us to Debrezeit. We experienced the serenity of a boat ride on the lake and made memories that will last a lifetime.",
    },

    {
      id: 6,
      title: "Praying Together, Miles Apart",
      image: pray,
      description:
        "Even though we were separated by kilometers, we still prayed together over video calls. You were so worried about your dad finding out about us, but the day after our heartfelt prayer, he gave us his blessing. That moment showed me how powerful our love and faith are, no matter the distance.",
      position: "Helder Technologies Solution",
    },
    {
      id: 2,
      title: "Our First New Year Celebration",
      image: newY,
      description:
        "That New Year’s Day, you arrived at my house at noon, and together we headed out to a café. The day was filled with joy and laughter, and being with you made it even more special. Our celebration marked the beginning of many wonderful moments together.",
    },
  ];

  return (
    <div className="w-full text-white mt-[6rem] mb-[2rem]" data-aos="slide-up">
      <h1 className="text-4xl font-bold py-10 px-1 sm:px-6 md:px-12 lg:px-20 text-center">
        Memories
      </h1>

      <Slider {...settings}>
        {data.map((item) => (
          <div key={item.id}>
            {/* <h3>{item.title}</h3> */}
            {/* <img
              src={item.image.src}
              alt={item.title}
              className="w-full h-auto"
            /> */}
          </div>
        ))}
      </Slider>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-1 sm:px-3 md:px-12 lg:px-20">
        {data.map((item) => (
          <div
            key={item.id}
            className="shadow-lg shadow-[#c09b33] border py-7 rounded-3xl"
            data-aos="slide-up"
            data-aos-duration="3000"
          >
            <div className="flex items-center justify-center">
              <img
                src={item.image} // Adjusted to access the correct image path
                alt={item.title}
                className="my-5 border border-[#c09b33] w-full h-auto"
              />
            </div>
            <div className="mx-[2rem]">
              <p className="text-center font-semibold text-[20px]">
                {item.title}
              </p>
              <p className="mb-5 text-justify text-md">
                {expanded[item.id]
                  ? item.description
                  : `${item.description.substring(0, 100)}...`}
              </p>
              <button
                onClick={() => handleToggle(item.id)}
                className="text-[#c09b33] underline"
              >
                {expanded[item.id] ? "Show Less" : "Read More"}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Memories;
