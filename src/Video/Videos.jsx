import React from 'react'
import PlayVideo from '../Component/PlayVideo'
import Recommended from '../Component/Recommended'
import { useParams } from 'react-router-dom'

function Videos() {

  const { videoId, categoryId } = useParams()

  return (
    <div>
      <div className=" mx-auto p-4 bg-black">
        {/* Main layout: flex for desktop and stacked for mobile */}
        <div className="flex flex-col lg:flex-row gap-6">

          {/* Right side: Play Video */}
          <div className="lg:w-2/3">
            <PlayVideo videoId={videoId} />
          </div>
          {/* Left side: Recommended Videos */}
          <div className="lg:w-1/3">
            <Recommended categoryId={categoryId} />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Videos



