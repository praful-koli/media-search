import { useEffect } from "react";
import { fetchPhotos, fetchVideo, fetchGif } from "../api/mediaApi";
import ResultCard from "./ResultCard";
import {ClimbingBoxLoader} from "react-spinners"
import {
  
  setLoading,
  setError,
  setResults,
} from "../redux/features/searchSlice";
import { useDispatch, useSelector } from "react-redux";
import useDebounce from "../coustomHook/useDebounce";


function ResultGrid() {
  const { query, activeTab, loading, error, results } = useSelector( (store) => store.search);
  const debouncedQuery = useDebounce(query, 600);
  const dispatch = useDispatch();

  useEffect(() => {
    const safeQuery = debouncedQuery || "BMW";
    let data;
    try {
      async function getApiData() {
        dispatch(setLoading());
        if (activeTab == "photos") {
          const { results } = await fetchPhotos(safeQuery);
          data = results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
            origin : item.links.download,
          }));
        }
        if (activeTab === "videos") {
          const { videos } = await fetchVideo(safeQuery); 
          data = videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
            origin : item.url,
          }));
        }
        if (activeTab === "GIF") {
          const gif = await fetchGif(safeQuery);
          console.log(gif);
          
          data = gif.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title,
            thumbnail: item.images.original.url,
            src: item.images.original.url,
            origin : item.url,
          }));
        }
        dispatch(setResults(data));
      }

      getApiData();
    } catch (error) {
      dispatch(setError(error.message));
      console.log(error.message);
    }
  }, [activeTab, debouncedQuery,dispatch]);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 place-content-center ">
        {loading ? (
          <h1 className=" absolute top-80 left-175  text-center text-4xl">  
            loading......
          </h1>
        ) : (
          results.map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-90 h-65 bg-gray-600   rounded-lg overflow-hidden"
              >
                {/* <a href={item.origin}></a> */}
                <ResultCard item={item}  title="save"/>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ResultGrid;
