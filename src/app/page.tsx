import { fetchWeather } from "@/actions/fetchWeather";
import { unstable_noStore } from "next/cache";

export default async function Home() {
  unstable_noStore()
  const data = await fetchWeather()
  
  return (
    <div className="">
      Examples of three beginner friendly ways to fetch data in Next JS server actions
      <p>{JSON.stringify(data)}</p>
    </div>
  );
}
