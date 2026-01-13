import { fetchGif, fetchPhotos, fetchVideo } from "./api/mediaApi";
function App() {
  const handlePhoto = async () => {
    const { results } = await fetchPhotos("car");
    console.log(results);
    
  };
  const handleVideo = async () => {
    const {videos} =  await fetchVideo("car")
    console.log(videos);
  }
  const handleGif = async () => {
    const  data = await fetchGif("car");
    console.log(data);
 
  };
  return (
    <div className=" p-16 flex gap-8">
      <button
        className="px-6 py-2 bg-purple-700 font-semibold text-2xl text-white outline-none rounded-md"
        onClick={() => handlePhoto()}
       >
        click Photo
     </button>
        

      <button
        className="px-6 py-2 bg-purple-700 font-semibold text-2xl text-white outline-none rounded-md"
        onClick={() => handleVideo()}
      >
        click vedio
      </button>

      <button
        className="px-6 py-2 bg-purple-700 font-semibold text-2xl text-white outline-none rounded-md"
        onClick={() => handleGif()}
      >
        click GIF
      </button>
    </div>
  );
}


export default App;
