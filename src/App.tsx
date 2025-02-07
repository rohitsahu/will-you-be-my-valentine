"use client";
import { useState } from "react";
import './App.css';

const images = Array.from({ length: 35 }, (_, i) => `/will-you-be-my-valentine/assets/${i + 1}.jpeg`);

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;
  const [bgImageIndex, setBgImageIndex] = useState(0);

  const handleNoClick = () => {
    setNoCount(noCount + 1);
    setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a chocolate brownie cake on top",
      "What about a salmon sushi?",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to RoRo's ghost",
      "please babe",
      ":((((",
      "PRETTY PLEASE",
      "I'm dead",
      "No :(",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

//   const images = Array.from({ length: 35 }, (_, i) => `/src/assets/${i + 1}.jpeg`);

// const handleNoClick = () => {
//   setNoCount(noCount + 1);
//   setBgImageIndex((prevIndex) => (prevIndex + 1) % images.length);
// };

return (
  <div
    className="-mt-16 flex h-screen flex-col items-center justify-center"
    style={{ backgroundImage: `url(${images[bgImageIndex]})`, backgroundSize: 'cover', 
    backgroundPosition: 'center' }}
  >
    {yesPressed ? (
      <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="my-4 text-4xl font-bold">WOOOOOO!!! I love you pookie!! ;))</div>
      </>
    ) : (
      <div className="centre-content">
        <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
        <div className="flex items-center" style={{paddingBottom: '20px'}}>
          <button
            className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
            style={{ fontSize: yesButtonSize }}
            onClick={() => setYesPressed(true)}
          >
            Yes
          </button>
          <button
            onClick={handleNoClick}
            className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
          >
            {noCount === 0 ? "No" : getNoButtonText()}
          </button>
        </div>
        <img
          className="h-[200px]"
          src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
        />
      </div>
    )}
  </div>
);
}
