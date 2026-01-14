import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";
import { Link } from "react-router-dom";

function Tab() {
  const tabs = ["photos", "videos", "GIF", "Your Collection"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);


  return (
    <div className="flex gap-10 p-10 justify-center md:justify-end ">
      {tabs.map((ele, idx) => {
        return ele !== "Your Collection" ? (
          <button
            className={`${
              activeTab == ele ? "bg-blue-600" : "bg-gray-600"
            } transition  text-lg px-6 py-1.5 rounded-md border-none cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => dispatch(setActiveTab(ele))}
          >
            {ele}
          </button>
        ) : (
          <Link key={idx} to="/collection">
            <button
            className={`${
              activeTab == ele ? "bg-blue-600" : "bg-gray-600"
            } transition  text-lg px-6 py-1.5 rounded-md border-none cursor-pointer active:scale-95`}>{ele}</button>
          </Link>
        );
      })}
    </div>
  );
}

export default Tab;
