import React from 'react'
import VideoCard from '../user_ex/Elements/videocard';
import videos from '../lib/yogaData';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const Recommendation = ({testPage}) => {

  const recommended = videos[testPage] || []
  console.log(recommended)

  return (
    <div className='h-full w-full flex items-center justify-center'>
      <Carousel
        opts={{
          align: "start",
          loop: true
        }}
        className="w-[80%] max-w-[1700px]"
      >
        <h1 className="text-2xl font-bold mb-4">Recommended Videos</h1>
        <CarouselContent className="flex">
          {recommended.map(( video, index ) => (
            <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <VideoCard key={video.videoId} videoId={video.videoId} title={video.title} />                
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  )
}

export default Recommendation