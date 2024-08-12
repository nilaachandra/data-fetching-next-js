import { fetchWeather } from '@/actions/fetchWeather'
import { unstable_noStore } from 'next/cache'
import React from 'react'

const Weather = async () => {
    unstable_noStore()
    const data = await fetchWeather()
  return (
    <div>{JSON.stringify(data)}</div>
  )
}

export default Weather