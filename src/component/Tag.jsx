import axios from "axios";
import { useEffect, useState } from "react";
import Spinner from './Spinner'
const API_KEY = "LJJwB7XtlNjPybcgINxzFp2c1AvzYf4d";


const Tag = () => {
  const [gif, setGif] = useState("");
  const [tag, setTag] = useState("");
  const [loading , setLoading] = useState(false)

  const getRandomGif = async () => {
    setLoading(false)
    const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}?tag=${tag}`;
    const { data } = await axios.get(apiUrl);
    console.log(data);
    const imageSource = data.data.images.downsized.url;
    // console.log(imageSource)
    setGif(imageSource);
    setLoading(true)
  };

  useEffect(() => {
    getRandomGif();
  }, []);

  const generator = () => {
    getRandomGif();
  };

  const changeHandler = (event) => {
    setTag(event.target.value);
  };

  return (
    <div className="p-[20px] mt-[20px] w-[40%]  h-auto bg-green-500 border border-black rounded-xl">
      <h1 className="text-2xl text-center p-2 mb-2 bg-yellow-200 border border-yellow-800 rounded-lg uppercase font-bold">
        Random GIF based on tag
      </h1>
      {
          loading ? (<Spinner/>) : (<img src={gif} alt="" className="w-full h-[350px]"/>)
        }
      <input
        type="text"
        placeholder="Enter Tag You want To Generate"
        className="mt-[20px] w-full p-2 bg-green-700 border border-green-700 outline-none text-white"
        onChange={changeHandler}
        value={tag}
      />
      <button
        className="p-[10px] w-full font-bold text-xl rounded-md border border-black uppercase mt-[20px] bg-red-500 "
        onClick={generator}
      >
        Generate
      </button>
    </div>
  );
};

export default Tag;
