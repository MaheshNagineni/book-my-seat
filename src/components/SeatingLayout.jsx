import React from "react";
import Seat from "./Seat";
import { range } from "../lib/utils/range";
import { getRowAlphabet } from "../lib/utils/getRowAlphabet";

const data = {
  premiumSeats: [8, 26],
  standardSeats: [4, 21],
  gapAfterSeats: [4, 22],
};

const statusIndicators = [
  { name: "Sold", color: "bg-gray-600" },
  { name: "Available", color: "" },
  { name: "Selected", color: "bg-green-600" },
  { name: "Social Distancing seats", color: "bg-red-600" },
];
const SeatingLayout = () => {
  return (
    <div className="p-4 flex flex-col items-center justify-center gap-2">
      {/* Premiun Container */}
      <SeatsTypeContainer seatsType={"Premium"} key={`container-premium`}>
        {range(0, data.premiumSeats[0] - 1).map((index) => (
          <SeatsRow
            key={`${index}-premium`}
            rowId={index}
            numberOfSeats={data.premiumSeats[1] - 1}
            rowType={"Premium"}
          />
        ))}
      </SeatsTypeContainer>
      {/* Standard Container */}
      <SeatsTypeContainer seatsType={"Standard"} key={`container-standard`}>
        {range(0, data.standardSeats[0] - 1).map((index) => (
          <SeatsRow
            key={`${index}-standard`}
            rowId={index}
            numberOfSeats={data.standardSeats[1] - 1}
            rowType={"Standard"}
          />
        ))}
      </SeatsTypeContainer>

      <div className="p-4 flex flex-row items-center justify-center gap-2">
        {statusIndicators.map((indicator, index) => {
          return <StatusIndicator name={indicator.name} color={indicator.color} key={index} />;
        })}
      </div>
    </div>
  );
};
//
const StatusIndicator = ({ name, color }) => {
  return (
    <div className="flex flex-row mr-3 items-center justify-between">
      <div
        className={`mr-2 w-[15px] h-[15px] rounded-sm ${color !== "" ? color : 'border-2 border-green-600'}`}
      ></div>{" "}
      <p>{name}</p>
    </div>
  );
};
// Seats Row Comp
const SeatsRow = ({ rowId, numberOfSeats = 10, rowType }) => {
  return (
    <div className="flex flex-nowrap items-center justify-center gap-1">
      {/*  */}
      {range(0, numberOfSeats).map((index) => {
        //
        const rowIdCalc = `${getRowAlphabet(
          rowType,
          rowId,
          data.premiumSeats[0]
        )}${index + 1}`;
        //
        return (
          <React.Fragment key={rowIdCalc}>
            {/*  */}
            {data.gapAfterSeats.includes(index) && rowType === "Premium" && (
              <div className="w-20"></div>
            )}
            {/*  */}
            <Seat
              available={true}
              seatId={rowIdCalc}
              selected={false}
              type={rowType}
            />
          </React.Fragment>
        );
      })}
    </div>
  );
};
//
//
const SeatsTypeContainer = ({ seatsType, children }) => {
  return (
    <div className="flex flex-col gap-2 items-center justify-center">
      <h3>
        {seatsType}: {seatsType === "Premium" ? 250 : 180}
      </h3>
      {children}
    </div>
  );
};

export default SeatingLayout;
