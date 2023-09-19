import { useEffect, useState, lazy } from "react";
import { Preloader } from "../components/Preloader";
// import { LeaderBoardItem } from "./components/LeaderBoardItem";
const LeaderBoardItem = lazy(() => import("../components/LeaderBoardItem"));

function VerticalJump() {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderBoard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycby7tRC5hZ5yrSB94nzZjuGfXg1YOw4ze6K8AEdXBg7SzJy5RhwPGFAd6FYH2Jc9AnIb/exec"
    )
      .then((response) => response.json())
      .then((data) => {
        const leaderBoardData = data.data;
        setIsLoading(false);
        setLeaderBoard(
          leaderBoardData.filter(
            (leader) => leader["Full Name"] && leader["Full Name"].trim() !== ""
          )
        );
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  };
  useEffect(() => {
    fetchData();
    // Set up interval to fetch data every 5 minutes (adjust the interval as needed)
    const intervalId = setInterval(fetchData, 1 * 60 * 1000);

    // Cleanup the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  //   const handleSearch = (searchTerm) => {
  //     setSearchTerm(searchTerm);
  //   };

  //   const filteredData = searchTerm
  //     ? leaderboard.filter(
  //         (leader) =>
  //           leader["First Name"] &&
  //           leader["First Name"].toLowerCase().includes(searchTerm.toLowerCase())
  //       )
  //     : leaderboard;

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <img
            className="max-w-[400px] absolute left-10 -bottom-[10vh] -rotate-[8deg]"
            src="/vertical.png"
            alt=""
          />
          <div className=" w-full md:w-[50vw] h-[90vh] bg-white bg-opacity-10  backdrop-blur-md flex flex-col space-y-10 p-3 md:p-5 rounded-lg">
            <div className="flex  flex-col">
              <div className=" w-full  flex flex-col md:flex-row justify-between items-center space-y-2">
                <div className=" flex justify-center md:justify-start w-full">
                  {/* <p className=" text-white text-4xl uppercase">
                    NFL Experience Leaderboard
                  </p> */}
                  <h1 className="bold text-5xl">VERTICAL JUMP</h1>
                </div>
                <img
                  className=" max-w-[150px] md:max-w-full"
                  src="/nnfl.png"
                  alt=""
                />
              </div>
              {/* <div className=" relative">
                <input
                  type="text"
                  placeholder="Search for your name..."
                  value={searchTerm}
                  onChange={(e) => handleSearch(e.target.value)}
                  className=" px-3 py-2 font-medium text-[1.2rem] text-white bg-transparent border rounded-full"
                />
                <svg
                  className=" absolute right-0 top-[25%] opacity-30 pr-2"
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="#000000"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div> */}
            </div>
            <div className="scroll  flex flex-col justify-start items-start overflow-y-scroll h-full ">
              <div className=" flex justify-between w-full p-3 pr-6 text-xl text-white font-bold sticky top-0 bg-[#191818]">
                <div className=" flex gap-2 text-xl md:gap-4 font-bold">
                  <h1>Pos.</h1>
                  <h1>Name</h1>
                </div>
                <h1>Score</h1>
              </div>
              {leaderboard.slice(0, 10).map((leader, index) => {
                let itemClass = ""; // Initialize as an empty string

                // Check the position and assign the appropriate class
                if (index === 0) {
                  itemClass = "first-place";
                } else if (index === 1) {
                  itemClass = "second-place";
                } else if (index === 2) {
                  itemClass = "third-place";
                }
                return (
                  <LeaderBoardItem
                    identifyer={index}
                    name={leader["Full Name"]}
                    rank={leader["Pos."]}
                    pointsVert={leader["Vertical Jump"]}
                    className={itemClass}
                  />
                );
              })}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VerticalJump;
