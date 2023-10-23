import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deselect, select } from "../store/slices/selectedSlice";

const Seat = ({ seatId, type }) => {
  //
  const bookedSeats = useSelector((state) => state.booked);

  const [isAvailable, setIsAvailable] = useState(true);
  //
  const [isSelected, setIsSelected] = useState(false);
  //
  const dispatch = useDispatch();
  //
  const handleClick = () => {
    if (!isSelected) {
      dispatch(select({ seatId, seatType: type }));
      setIsSelected(true);
    } else {
      dispatch(deselect(seatId));
      setIsSelected(false);
    }
  };

  //
  useEffect(() => {
    const isBooked = bookedSeats?.bookings
      ?.map((seat) => seat.seatId)
      .includes(seatId);

    if (isBooked) {
      setIsAvailable(false);
    } else {
      return () => {};
    }
    return () => {};
  }, [bookedSeats?.lastbooking, bookedSeats?.bookings, seatId]);

  //
  return (
    <button
      key={seatId}
      // style
      className={`h-[30px] w-[30px] text-xs rounded-md uppercase
      ${
        isAvailable
          ? "bg-gray-50 hover:bg-green-400 border-2 border-green-400 text-gray-950 hover:text-gray-50"
          : "bg-gray-500 border-none"
      } 
      ${
        isSelected && isAvailable
          ? "bg-green-400 !text-gray-50 hover:bg-red-400 hover:border-red-400"
          : ""
      }`}
      //   disabled
      disabled={isAvailable ? false : true}
      //   click events
      onClick={handleClick}
    >
      {isAvailable ? seatId : ""}
    </button>
  );
};

export default Seat;
