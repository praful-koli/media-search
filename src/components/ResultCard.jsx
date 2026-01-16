
import {useDispatch} from 'react-redux'
import { addCollection, removeCollection } from "../redux/features/collectionSlice";

function ResultCard({ item , title }) {
   
  const dispatch = useDispatch()

  return (
    <div className="w-full h-full relative">
      {item.type == "photo" ? (
        <img className="object-cover w-full h-full" src={item.src} alt="" />
      ) : (
        ""
      )}
      {item.type == "video" ? (
        <video
          autoPlay
          loop
          muted
          className="object-cover w-full h-full"
          src={item.src}
          alt=""
        ></video>
      ) : (
        ""
      )}
      {item.type == "GIF" ? (
        <img className="object-cover w-full h-full" src={item.src} alt="" />
      ) : (
        ""
      )}
      
      {
        title === 'save' ? 
        <button className=" absolute bottom-3 right-3 px-2 text-[12px] py-1 rounded-md bg-blue-600 cursor-pointer"
        onClick={()=> dispatch(addCollection(item))}
      >
        {title}
      </button> :
       <button className=" absolute bottom-3 right-3 px-2 text-[12px] py-1 rounded-md bg-red-900 cursor-pointer"
        onClick={()=>  dispatch(removeCollection(item.id))
         }
      >
        {title}
      </button> 
      }
      
      <p className="w-4/5 absolute bottom-3 left-3 text-white px-2 text-[16px] py-1 ">
        {item.title}
      </p >
    </div>
  );
}

export default ResultCard;