import axios from "axios";
import { useEffect, useState } from "react"


const API_KEY = 'LJJwB7XtlNjPybcgINxzFp2c1AvzYf4d';

const Randomgif = () => {
    const [gif , setGif] = useState('')
    
    const getRandomGif = async () => {
      const apiUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
      const {data} = await axios.get(apiUrl)
      console.log(data)
      const imageSource = data.data.images.downsized.url;
      // console.log(imageSource)
      setGif(imageSource)
    }

    useEffect(() => {
      getRandomGif()
    },[]);

    const generator = () => {
      getRandomGif()
    }
    
  return (
    <div className="pt-[20px] h-auto">
        <h1>Random GIF</h1>
        <img src={gif} alt="" />
        <button className="pd-[20px] border border-black mt-[20px]" onClick={generator}>Generate</button>
    </div>
  )
}

export default Randomgif