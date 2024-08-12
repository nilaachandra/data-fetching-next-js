"use server"

import { sleep } from "./lib/utils";

export const fetchWeather = async () => {
    const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=24.8&lon=92.8&appid=${process.env.WEATHER_API_KEY}`
    )
    const data = await res.json();
    await sleep(3000)
    return data;
}