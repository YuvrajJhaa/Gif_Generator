import React, { useState } from 'react'
import axios from 'axios';
import Spinner from './Spinner';

const Random = () => {
    const api_key = process.env.REACT_APP_GIPHY_API_KEY;
    const [gif,setGif] = useState();
    const [loading,setLoading] = useState(false);


    async function fetchData (){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}`;
        const {data} = await axios.get(url);
        setGif(data.data.images.downsized_large.url);
        setLoading(false);
    }
    function clickHandler (){
        fetchData();
    }
  return (
    <div className='w-1/2  rounded-lg border border-black flex flex-col items-center  text-center mt-[40px] bg-green-500 gap-y-6'>
      <h1 className='underline underline-offset-8 text-2xl font-bold mt-[40px]'>A RANDOM GIF</h1>
      {
        loading ? (<Spinner/>) : (<img src={gif} width={450}  alt="" />)
      }
      
      <button className='w-10/12 mb-10 items-center py-2 rounded-lg font-semibold bg-white' onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Random
