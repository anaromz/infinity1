import React, { useState, useEffect } from "react";
import Gallery from "./gallery";
import Memories from "./memories";
import Future_plan from "./future_plan";
import Letter from "./letter";

function Home() {
  const [displayedText, setDisplayedText] = useState("");
  const [letterIndex, setLetterIndex] = useState(0);

  // The sentence to display letter by letter
  const sentence =
    "Infinity is the love I have for you, boundless, timeless, and everlasting.";

  useEffect(() => {
    // Typing effect: display one letter at a time
    const interval = setInterval(() => {
      if (letterIndex < sentence.length) {
        setDisplayedText((prev) => prev + sentence[letterIndex]);
        setLetterIndex(letterIndex + 1);
      } else {
        // After finishing, reset to type again
        setDisplayedText("");
        setLetterIndex(0);
      }
    }, 100); // Change the speed of typing (100ms for each letter)

    // Cleanup interval on unmount
    return () => clearInterval(interval);
  }, [letterIndex, sentence]);

  return (
    <div>
      <div className="relative">
        {/* <section> */}
          <img
            src="/back1.PNG"
            className="w-full h-screen object-cover"
            alt="background"
          />
          {/* Letter by letter typing effect */}
          <p className="absolute text-white bg-black/20 font-bold text-center top-[20rem] left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-3xl">
            {displayedText}
          </p>

          {/* Animated logo */}
          <img
            src="/logo1.png"
            className="w-[12rem] h-[12rem] absolute top-[20rem] left-1/2 transform -translate-x-1/2 logo-animation"
            alt="logo"
          />
        {/* </section> */}
      </div>
      {/* <section id="memories" className="h-screen"> */}
        <Memories />
        <Future_plan />
        <Letter />
      {/* </section> */}
      {/* <section id="gallery" className="h-screen"> */}
        <Gallery />
      {/* </section> */}
      {/* <section id="letter" className="h-screen"> */}
       
      {/* </section> */}
      {/* <section id="future_plan" className="h-screen"> */}
       
      {/* </section> */}
    </div>
  );
}

export default Home;
