import { fetchWeather } from '@/actions/fetchWeather';
import { unstable_noStore } from 'next/cache';
import React from 'react'

const SecondWay = async () => {
    unstable_noStore();
    const data = await fetchWeather();
    return (
      <div className="">
        <h1>Second Page</h1>
        <p className="text-black">{JSON.stringify(data)}</p>
      </div>
  )
}

export default SecondWay