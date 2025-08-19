import React, { useState } from "react";

const symbols = ["🍒", "🍋", "🍊", "🍇", "⭐", "💎"];

export default function SlotMachine() {
  const [reels, setReels] = useState(["🍒", "🍒", "🍒"]);
  const [message, setMessage] = useState("Press spin to play!");

  const spin = () => {
    const newReels = Array.from({ length: 3 }, () =>
      symbols[Math.floor(Math.random() * symbols.length)]
    );
    setReels(newReels);

    if (newReels.every((s) => s === newReels[0])) {
      setMessage("🎉 Jackpot! You win!");
    } else if (new Set(newReels).size === 2) {
      setMessage("Nice! Two of a kind.");
    } else {
      setMessage("Try again...");
    }
  };

  return (
    <div className="flex flex-col items-center gap-6 p-6">
      <div className="flex text-7xl gap-6 bg-black/20 rounded-2xl px-8 py-4">
        {reels.map((r, i) => (
          <span key={i}>{r}</span>
        ))}
      </div>

      <button
        onClick={spin}
        className="px-6 py-3 rounded-2xl text-lg font-semibold shadow hover:shadow-lg bg-green-500"
      >
        Spin
      </button>

      <p className="text-xl">{message}</p>
    </div>
  );
}
