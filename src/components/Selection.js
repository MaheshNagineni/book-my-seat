import React from "react";
import { useSelector } from "react-redux";
import ProceedBtn from "./ProceedBtn";
import { sortSeats } from "../lib/utils/sortSeats";

const Selection = () => {
  const rates = Object.freeze({
    Premium: 250,
    Standard: 180,
  });

  const selected = useSelector((state) => state.selected);
  const stats = {
    premium: selected.filter((seat) => seat.seatType === "Premium").length,
    standard: selected.filter((seat) => seat.seatType === "Standard").length,
    totalcount: selected.length,
  };
  return (
    <div className="py-1 px-3 max-h-[620px] w-[420px] flex flex-col gap-2 bg-gray-200 rounded-md shadow-md">
      <h3 className="font-bold">Your Selection</h3>
      <div className="flex flex-col gap-2">
        <h2 className="text-left font-semibold">Selected Tickets</h2>
        <p className="uppercase">
          {sortSeats(selected.map((seat) => seat.seatId)).join(", ")}
        </p>
        <p className="font-semibold">
          {stats.premium > 0 ? `Premium x ${stats.premium}` : ""}
          {stats.standard > 0 ? (
            <>
              <br /> Standard x {stats.standard}
            </>
          ) : (
            ""
          )}
          <br />
          Total Tickets: {stats.totalcount}
          <br />
          Amount:{" "}
          {stats.premium * rates.Premium + stats.standard * rates.Standard}
        </p>
        <ProceedBtn tickets={selected} />
      </div>
    </div>
  );
};

export default Selection;
