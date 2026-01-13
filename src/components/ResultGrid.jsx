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
function ResultGrid() {
  const { query, activeTab, loading, error, results } = useSelector(
    (store) => store.search
  );

  const dispatch = useDispatch();

  useEffect(() => {
    let sefeQuery = query || "random";
    let data;
    try {
      async function getApiData() {
        dispatch(setLoading());
        if (activeTab == "photos") {
          const { results } = await fetchPhotos(sefeQuery);
          data = results.map((item) => ({
            id: item.id,
            type: "photo",
            title: item.alt_description,
            thumbnail: item.urls.small,
            src: item.urls.full,
          }));
        }
        if (activeTab === "videos") {
          const { videos } = await fetchVideo(sefeQuery);
          data = videos.map((item) => ({
            id: item.id,
            type: "video",
            title: item.user.name,
            thumbnail: item.image,
            src: item.video_files[0].link,
          }));
        }
        if (activeTab === "GIF") {
          const gif = await fetchGif(sefeQuery);
          data = gif.map((item) => ({
            id: item.id,
            type: "GIF",
            title: item.title,
            thumbnail: item.images.original.url,
            src: item.images.original.url,
          }));
        }
        dispatch(setResults(data));
      }

      getApiData();
    } catch (error) {
      dispatch(setError(error.message));
      console.log(error.message);
    }
  }, [activeTab, query]);

  if (error) {
    return <h1>error</h1>;
  }

  return (
    <div className="w-full h-auto flex justify-center py-8">
      <div className="grid grid-cols-4 gap-5 place-content-center ">
        {loading ? (
          <h1 className="   text-center text-2xl">  
            loading......
          </h1>
        ) : (
          results.map((item, idx) => {
            return (
              <div
                key={idx}
                className="w-90 h-65 bg-gray-600  rounded-md overflow-hidden"
              >
                <ResultCard item={item} />
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}

export default ResultGrid;
