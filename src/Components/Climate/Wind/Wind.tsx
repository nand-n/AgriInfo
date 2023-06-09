import React from 'react'

function Climate() {
  return (
      <div>
          <div>
              <div className=' mt-20 mb-20'>
          <div className="relative bg-gradient-to-r from-white to-white shadow border-2 rounded-3xl" style={{width: 1314, height: 717,}}>
     <div className="inline-flex flex-col space-y-32 items-start justify-start pl-14 pr-56 pt-7 pb-32 absolute left-0 top-0"  >
        <p className=" text-center text-7xl font-extrabold leading-10 text-gray-800">Weather & Climate</p>
        <p className="leading-normal text-gray-800" style={{width: 589, height: 129,}}>How It Works?<br/><br/>Use data visualization tools to display climate and weather patterns over a longer period of time, such as several years or even decades. This will allow farmers to see how weather patterns have changed over time and make informed decisions about long-term crop planning.<br/></p>
        <p className="text-xl leading-normal text-gray-800" style={{width: 598, height: 90,}}>Provide detailed information about microclimates in different areas, as this can affect crop yields and optimal planting times.</p>
    </div> 
    <p className="absolute text-xl leading-normal text-gray-800" style={{width: 598, height: 98, left: 707, top: 358,}}>Use satellite imagery and other remote sensing technologies to monitor crop growth and health in real-time. This can help farmers identify potential issues early on and take proactive measures to address them.</p> 
</div>
          </div>
          <div className="">
                  {/* <h1 className='text-center text-5xl font-bold my-2'>Weather and Climate</h1> */}
                  <div className="flex justify-center">
              <iframe className=' rounded-2xl mt-2' width="1000" height="600" src="https://embed.Climatey.com/embed2.html?lat=6.708&lon=40.605&detailLat=7.689&detailLon=39.364&width=1000&height=600&zoom=7&level=surface&overlay=Climate&product=ecmwf&menu=&message=true&marker=true&calendar=now&pressure=true&type=map&location=coordinates&detail=true&metricClimate=km%2Fh&metricTemp=%C2%B0C&radarRange=-1"></iframe>  
                      
                  </div>
          </div>
          </div>
          </div>
  )
}

export default Climate