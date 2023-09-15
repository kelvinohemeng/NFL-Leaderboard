import { useEffect, useState, lazy } from "react";
import { Preloader } from "../components/Preloader";
// import { LeaderBoardItem } from "./components/LeaderBoardItem";
const LeaderBoardItem = lazy(() => import("../components/LeaderBoardItem"));

function Overall() {
  const [isLoading, setIsLoading] = useState(true);
  const [leaderboard, setLeaderBoard] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = () => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwLfCPxmbDzSeaBDVl0-BWJatpdqrF5XvL_7R3_igHCLrV5RvnTHZgiCo22bgzV6ceS/exec"
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
  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  const filteredData = searchTerm
    ? leaderboard.filter(
        (leader) =>
          leader["Full Name"] &&
          leader["Full Name"].toLowerCase().includes(searchTerm.toLowerCase())
      )
    : leaderboard;

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <>
          <div className=" md:min-w-[80vw] h-[80vh] bg-white bg-opacity-10 backdrop-blur-md flex flex-col  space-y-5 p-3 md:p-5 rounded-lg">
            <div className="flex  flex-col ">
              <div className=" w-full px-2 flex flex-col md:flex-row justify-between items-center space-y-5">
                <div className=" flex flex-col">
                  <p className=" bold text-5xl uppercase">
                    NFL Experience Leaderboard
                  </p>
                  {/* <h1 className="bold text-5xl">OVERALL LEADERBOARD</h1> */}
                </div>
                {/* <img
                  className=" max-w-[150px] md:max-w-full"
                  src="/nnfl.png"
                  alt=""
                /> */}
                <div className=" relative">
                  <input
                    type="text"
                    placeholder="Search for your name..."
                    value={searchTerm}
                    onChange={(e) => handleSearch(e.target.value)}
                    className=" px-3 py-2 font-medium text-[1.2rem] text-white bg-transparent border rounded-full"
                  />
                </div>
              </div>
            </div>
            <div className="scroll  flex flex-col justify-start items-start overflow-y-scroll max-w-screen md:w-full  h-full">
              <div className=" flex justify-between items-center w-full py-2 text-xl pl-3 text-white font-bold sticky top-0 bg-[#191818] ">
                <div className=" flex flex-1 gap-3 md:gap-5 text-xl  font-bold">
                  <h1 className=" hidden md:block">Pos.</h1>
                  <h1 className=" block md:hidden">#</h1>
                  <h1 className=" md:w-[80px] flex justify-start">Name</h1>
                </div>

                <h1 className=" flex-1 flex justify-center">QB Toss</h1>
                <h1 className=" flex-1 flex justify-center">V. Jump</h1>
                <h1 className=" flex-1 flex justify-center">40Y</h1>
                <h1 className=" flex-1 flex justify-center">TTL</h1>
              </div>
              {filteredData.map((leader, index) => {
                let itemClass = ""; // Initialize as an empty string

                // Check the position and assign the appropriate class
                if (leader["Pos."] === 1) {
                  itemClass = "first-place";
                } else if (leader["Pos."] === 2) {
                  itemClass = "second-place";
                } else if (leader["Pos."] === 3) {
                  itemClass = "third-place";
                }
                return (
                  <LeaderBoardItem
                    identifyer={index}
                    rank={leader["Pos."]}
                    name={leader["Full Name"]}
                    pointsVert={leader["Overall"].toString()}
                    qbtoss={leader["QB Toss"].toString()}
                    fourtyyard={leader["40 Yard Dash/Time"].toString()}
                    vertical={leader["Vertical Jump"].toString()}
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

export default Overall;
