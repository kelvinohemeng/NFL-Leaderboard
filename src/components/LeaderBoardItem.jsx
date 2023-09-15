import React from "react";
const LeaderBoardItem = ({
  identifyer,
  name,
  pointsVert,
  rank,
  qbtoss,
  vertical,
  fourtyyard,
  className,
}) => {
  return (
    <div
      key={identifyer}
      className={`grid ${
        qbtoss ? "grid-cols-5  content-center" : "grid-flow-col"
      }
      w-full place-content-between h-fit border-t-[1px]  border-opacity-50 border-white text-white font-medium px-2 py-[12px] `}
    >
      <div
        className={`flex  col-span-1
        items-center gap-3 md:gap-5`}
      >
        <span
          className={` flex justify-center ${
            qbtoss ? "md:w-[30px]" : ""
          } w-[30px]`}
        >
          {rank}
        </span>
        <span className="">{name}</span>
      </div>
      {qbtoss ? (
        <span className=" col-span-1 flex justify-center">{qbtoss}</span>
      ) : (
        ""
      )}
      {vertical ? (
        <span className=" col-span-1 flex justify-center">{vertical}</span>
      ) : (
        ""
      )}
      {fourtyyard ? (
        <span className=" col-span-1 flex justify-center">{fourtyyard}</span>
      ) : (
        ""
      )}
      <div className=" col-span-1 flex justify-center">
        <span
          className={` 
         ${className} min-w-[50px] px-5 rounded-md`}
        >
          {pointsVert}
        </span>
      </div>
    </div>
  );
};

export default LeaderBoardItem;
