"use client";
import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Preetish,Are you sure?",
      "Really sure?",
      "Think again please",
      "I'll cri!",
      "Ik I fucked up, I'm sorry?",
      "I should've said something and I didnt",
      "IM SO FUCKING SORRY",
      "and now it's too late ik ",
      "BUT I REALLY HOPE ITS NOT TOO LATE",
      "You're the most understanding person ever",
      "I hope you give it another thought",
      "Are you absolutely certain, Are you done with me bbg?",
      "You are making a mistake pookie!",
      "Have a heart preeti jeez ill cri",
      "BABY YOU LIGHT UP MY WORLD LIKE NOBODY ELSE",
      "The way that you flip your hair gets me overwhelmed <3",
      "Baby IM PREYING on you tonight",
      "hunt you down eat you alive, OK JKKK (or am I ;) )",
      "Wouldn't you reconsider?",
      "POOKIE PWEASE SAY YES :3",
      "Is that your final answer?",
      "You're breaking my heart </3 :(",
      "me sad cri bye (these fogo ppl istg)"
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen -mt-16">
      {yesPressed ? (
        <>
        <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
        <div className="text-4xl font-bold my-4">Ok lessgoooooo</div>
        </>
      ) : (
        <>
          <img className="h-[200px]" src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif" />
          <h1 className="text-4xl my-4">Will you be my pookie?</h1>
          <div>
            <button
              className={`bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}