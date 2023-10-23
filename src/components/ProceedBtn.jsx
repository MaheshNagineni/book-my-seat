import React from "react";
import { useDispatch } from "react-redux";
import { removeall } from "../store/slices/selectedSlice";
import { book } from "../store/slices/bookedSlice";

const ProceedBtn = ({ tickets }) => {
  //
  const dispatch = useDispatch();
  //
  const handleClick = () => {
    dispatch(book([...tickets]));
    dispatch(removeall());
  };
  return (
    <button
      className="w-full max-w-xs p-2 bg-blue-500 text-gray-50 font-semibold rounded-md shadow-md hover:bg-blue-700"
      onClick={handleClick}
    >
      Proceed
    </button>
  );
};

export default ProceedBtn;
