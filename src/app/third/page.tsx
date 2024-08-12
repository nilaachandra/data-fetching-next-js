import React, { Suspense } from 'react'
import Weather from './Weather'

const ThirdWay = async () => {
  return (
    <div>
      Third Way
      <Suspense fallback={<h1>Fetching Weather....</h1>}>
        <Weather/>
      </Suspense>
    </div>
  )
}

export default ThirdWay