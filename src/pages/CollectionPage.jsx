import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import ResultCard from "../components/ResultCard";
import { clearCollection } from "../redux/features/collectionSlice";

function CollectionPage() {

  const collectionList = useSelector((state) => state.collection);
  const dispatch = useDispatch()
  return (
    <div>
      <div className="w-full px-15 py-5 flex justify-between bg-gray-700 ">
        <div className="flex justify-between w-3/5">
          <Link to="/">
            <h1 className="  cursor-pointer text-2xl active:scale-95 transition  ">
              Media
            </h1>
          </Link>

          <h1 className="text-4xl ">YOUR COLLECTION</h1>
        </div>

        <div className="flex gap-5 w-2/5 justify-end">
          <Link to="/">
            <button className="bg-gray-900 cursor-pointer text-2xl rounded-md active:scale-95 transition px-6 py-1.5 ">
              Back Dashboard
            </button>
          </Link>
          <button className="bg-red-900  cursor-pointer text-2xl rounded-md active:scale-95 transition px-6 py-1.5 "
          onClick={()=> dispatch(clearCollection())}>
            Remove All
          </button>
        </div>
      </div>

      <div className="w-full h-auto flex justify-center py-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center ">
          {collectionList.map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-90 h-65 bg-gray-600   rounded-lg overflow-hidden"
              >
                <ResultCard item={item} title="remove" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default CollectionPage;
