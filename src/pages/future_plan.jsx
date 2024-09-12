import React from "react";

function Future_plan() {
  const qunality = [
    {
      src: ["/fa1.jpg"],
      title: "Getting Married",
      description:
        "I dream of the day when we stand together, both wearing this beautiful KABA, ready to embark on the next chapter of our lives as one. To share every moment, every challenge, and every joy with you is all I could ever wish for. I can’t wait for the day when our dreams become reality, and we walk hand in hand into our forever.",
    },
    {
      src: ["/fu2.jpg", "/fu3.jpg"],
      title: "Our Mini Us",
      description:
        "Looking at these childhood photos, I can’t help but imagine the beautiful life we’re building together. One day, I want to see a mini version of you and me—a perfect blend of our love, laughter, and dreams.",
    },
    {
      src: ["/fu4.jpg", "fu5.jpg"],
      title: "Future Birthday Celebrations",
      description:
        "As we look back on our childhoods, I can’t help but dream of the future. One day, we'll celebrate not just your birthday, but also many more—yours, mine, and those of the little ones we’ll create together. Every birthday will be filled with love, joy, and laughter, just like the ones we shared in these pictures, but even more special because we’ll be building our own family.",
    },
    {
      src: ["/fu6.jpg", "fu7.jpg"],
      title: "A Home Built on Faith",
      description:
        "Our home will be a place built on the foundation of fearing God and praying together. We will walk in faith, side by side, and teach our children the importance of going to church and living a life centered around God. Together, we will create a family rooted in love, faith, and devotion, always seeking His guidance in all we do.",
    },
  ];

  return (
    <div>
      <div className="leading-tight mt-[10rem]">
        <p className="text-white font-bold text-[3.5rem] text-center">Future plan</p>
      </div>
      <div className="mt-10 lg:mx-[6rem] mx-[1rem] items-center justify-between">
        {qunality.map((item, index) => (
          <div
            key={index}
            className={`flex flex-col justify-between shadow-2xl p-5 rounded-2xl lg:flex-row ${
              index % 2 === 0 ? "" : "lg:flex-row-reverse"
            } items-center mb-10`}
            style={{
              background:
                "linear-gradient(135deg, #1e293b 0%, #1e293b 25%, #0f687e 50%, #1e293b 75%, #1e293b 100%)",
            }}
          >
            <div className="lg:w-1/2">
              <h2 className="lg:text-[2.4rem] text-[1.5rem] text-[#f3c74e] leading-tight font-semibold mb-2">
                {item.title}
              </h2>
              <p className="lg:text-[15px] text-[17px] text-[#abacac]">
                {item.description}
              </p>
            </div>
            <div className="lg:w-1/2 lg:ml-5 flex flex-wrap gap-4">
              {/* Check if src is an array and map over it */}
              {Array.isArray(item.src) ? (
                item.src.map((imgSrc, i) => (
                  <img
                    key={i}
                    src={imgSrc}
                    className="max-w-full lg:h-60"
                    alt={`${item.title} image ${i + 1}`}
                  />
                ))
              ) : (
                <img
                  src={item.src}
                  className="max-w-full lg:h-60"
                  alt={item.title}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Future_plan;
