import React, { useRef, useState, useEffect } from "react";

function Letter() {
  const [isModalOpen, setIsModalOpen] = useState(true); // Open modal on initial render
  const [isConfirmed, setIsConfirmed] = useState(false); // Track confirmation status
  const [showWarningModal, setShowWarningModal] = useState(false); // Show the funny warning modal
  const boxRef = useRef(null);
  
  const upgradeRef = useRef(null);

  const handleClickOutside = (event) => {
    if (
      (boxRef.current && !boxRef.current.contains(event.target)) ||
      (upgradeRef.current && !upgradeRef.current.contains(event.target))
    ) {
      // Prevent closing the modal when clicking outside
    }
  };

  const handleCloseModal = (confirmed) => {
    if (confirmed) {
      setIsConfirmed(true); // If confirmed, set state to true
      setIsModalOpen(false); // Close the modal
    } else {
      // If "No" is selected, open the warning modal
      setIsModalOpen(false);
      setShowWarningModal(true);
    }
  };

  const handleBackToFirstModal = () => {
    // Close the warning modal and go back to the first modal
    setShowWarningModal(false);
    setIsModalOpen(true);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={boxRef} className="mt-[6rem] text-white">
      {isModalOpen && (
        <div ref={upgradeRef}>
          <Questionnary onClose={handleCloseModal} />
        </div>
      )}
      {isConfirmed && !isModalOpen && (
        <div className="letter">
          <p className="text-black font-bold text-[3.5rem] text-center">My letter</p>
        <p className="mx-[21rem] text-[black] bg-[white]/20 px-3 text-justify text-lg py-4 font-semibold mt-2">

        <span className="font-bold text-red-900">Of course, you confirm "Yes," otherwise, how could we have come this far? </span> From the moment I laid eyes on you, something deep inside me knew you were the one. At first, I tried to ignore it, maybe out of fear, maybe thinking it was too good to be true. But God has a way of leading us exactly where we belong, and He kept guiding me back to you.<br/><br/>
        
        You fought for us, for our love, when I wasn’t even sure how to fight for it myself. And in doing so, you made me the happiest girl I never even knew I could be. <span className="font-bold">Egziabher yimesgen,</span> because you are the answer to every prayer I whispered late at night, hoping for someone like you. Now that you're mine, I can’t imagine a future without you.<br/><br/>
        
        I promise you, from the depths of my heart, I will never let you go. You are the only love I’ll ever need, the one my heart has chosen forever. Together, we will face whatever life brings our way, hand in hand, because I know—without a doubt—that you are my forever.<br/><br/>
        
        I love you endlessly, and nothing will ever change that. You are the man of my dreams, the man I prayed for, and I’ll spend the rest of my life showing you just how much you mean to me.<br/>
        
       <p className="font-bold text-[3rem] text-center mt-4 text-black mb-4">I Love you Daddishu ❤️</p>
       </p>
       </div>
      )}
       {showWarningModal && (
        <WarningModal onBack={handleBackToFirstModal} />
      )}
    </div>
  );
}

function Questionnary({ onClose }) {
  const modalRef = useRef(null); // Define modalRef if needed

  return (
    <div className="modal-background mx-[2rem] lg:mx-0 flex items-center justify-center">
      <div
        className="bg-[#212325] rounded-2xl p-5 text-white bar scrollable-content"
        ref={modalRef}
      >
        <p className="text-center">
          This page is for when you're absolutely sure about your feelings.<br />
          Do you truly believe you're the one I'm meant to marry? <br />
          <span className="font-bold">Are you ready to make that promise?</span>
        </p>
        <div className="flex justify-between mx-10 mt-10">
          <button className="bg-[#c09b33] px-4 py-2 rounded-md" onClick={() => onClose(true)}>Yes</button>
          <button className="bg-[#c09b33] px-4 py-2 rounded-md" onClick={() => onClose(false)}>No</button>
        </div>
      </div>
    </div>
  );
}

function WarningModal({ onBack }) {
  return (
    <div className="modal-background mx-[2rem] lg:mx-0 flex items-center justify-center">
      <div className="bg-[#212325] rounded-2xl p-5 text-white bar scrollable-content">
        <p className="text-center">
          <span className="text-red-600 font-bold">
            You better say "Yes" otherwise...
          </span>{" "}
          I’ll make sure you say it by force! 😈 <br />
          Just kidding, but seriously, you should reconsider. <br />
          <span className="font-bold">Now go back and think again!</span>
        </p>
        <div className="flex justify-center mt-10">
          <button
            className="bg-[#c09b33] px-4 py-2 rounded-md"
            onClick={onBack}
          >
            Back
          </button>
        </div>
      </div>
    </div>
  );
}


export default Letter;