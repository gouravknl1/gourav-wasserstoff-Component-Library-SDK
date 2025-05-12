import React from "react";

export const Ticket = () => {
  const data = JSON.parse(localStorage.getItem("ticketData") || "{}");

  return (
    <div className="bg-gradient-to-br from-[#0a001f] to-[#1a0142] text-white min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold mb-4">
        Congrats,{" "}
        <span className="text-orange-400">{data.name || "Guest"}!</span>
      </h2>
      <p className="text-2xl font-bold mt-2 mb-4">Your ticket is ready.</p>

      <div className="bg-[#1f1147] border border-purple-800 rounded-xl p-4 mt-4 shadow-lg w-full max-w-sm">
        <h3 className="text-xl mb-4">🎟️ Coding Conf Ticket</h3>
        <div className="flex items-center gap-4">
          {data.photo && (
            <img
              src={data.photo}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-xl object-cover shrink-0"
            />
          )}
          <div className="text-left">
            <p className="text-lg font-bold">{data.name || "Name not found"}</p>
            <p className="text-sm text-purple-300 mt-1">
              ✉︎ {data.email || "Email not found"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
