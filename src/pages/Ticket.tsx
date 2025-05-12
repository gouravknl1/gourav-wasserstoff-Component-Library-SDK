import React from "react";

export const Ticket = () => {
  const data = JSON.parse(localStorage.getItem("ticketData") || "{}");

  const eventDate = "June 30, 2025";
  const endTime = "5:00 PM";

  return (
    <div className="bg-gradient-to-br from-[#0a001f] to-[#1a0142] text-white min-h-screen p-8 flex flex-col items-center justify-center text-center">
      <h2 className="text-4xl font-bold mb-4">
        Congrats,{" "}
        <span className="text-orange-400">{data.name || "Guest"}!</span>
      </h2>

      <p className="text-2xl font-bold mt-2 mb-4">Your ticket is ready.</p>

      <p className="text-white text-base">
        We've emailed your ticket to{" "}
        <span className="text-orange-400">{data.email || "your email"}</span>.
      </p>

      <div className="bg-[#1f1147] border border-purple-800 rounded-2xl p-6 mt-6 shadow-xl w-full max-w-md">
        <h3 className="text-2xl font-semibold text-white mb-3 text-left">
          🎟️ Coding Conf Ticket
        </h3>

        <div className="flex direction-row gap-12">
          <p className="text-sm text-purple-300 mb-1">
            📅 <span className="text-white">{eventDate} </span>
          </p>
          <p className="text-sm text-purple-300 mb-4">
            ⏰ Ends at <span className="text-white">{endTime}</span>
          </p>
        </div>

        <div className="flex items-center gap-4">
          {data.photo && (
            <img
              src={data.photo}
              alt="Profile"
              className="w-[60px] h-[60px] rounded-xl object-cover border border-white shadow-sm"
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
