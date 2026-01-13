import { useDispatch, useSelector } from "react-redux";
import { setActiveTab } from "../redux/features/searchSlice";

function Tab() {
  const tabs = ["photos", "videos", "GIF"];
  const dispatch = useDispatch();
  const activeTab = useSelector((state) => state.search.activeTab);
//   console.log(data);

  return (
    <div className="flex gap-10 p-10 justify-end ">
      {tabs.map((ele, idx) => {
        return (
          <button
            className={`${activeTab == ele ?  'bg-blue-600':  'bg-gray-600'} transition  text-lg px-6 py-1.5 rounded-md border-none cursor-pointer active:scale-95`}
            key={idx}
            onClick={() => dispatch(setActiveTab(ele))}
          >
            {ele}
          </button>
        );
      })}
    </div>
  );
}

export default Tab;
