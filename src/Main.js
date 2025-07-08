import React, { useState, useEffect } from 'react';

function Main() {
  const [color,setcolor] = useState('olive')

    function choice(color){
      setcolor(color)
    }


  return (
    <div style={{backgroundColor:color,height:'100vh'}}>
      <div className='px-20 py-4 border-4 left-1/2 transform -translate-x-1/2 mb-4	 fixed bottom-0 border-black rounded-md  text-white font-bold w-max flex justify-center items-center m-auto '>
        <button onClick={()=>{choice('gray')}} className='px-4 py-1 mx-2 border-white  rounded-md bg-gray-300'>Gray</button>
        <button onClick={()=>{choice('red')}} className='px-4 py-1 mx-2 border-white rounded-md bg-red-600'>Red</button>
        <button onClick={()=>{choice('green')}} className='px-4 py-1 mx-2 border-white rounded-md bg-green-300'>Green</button>
      </div>
    </div>
  );
}

export default Main;
